import os
import xml.etree.ElementTree as ET
from datetime import datetime
import html
import re

def parse_blogger_atom(atom_path, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    
    namespaces = {'atom': 'http://www.w3.org/2005/Atom'}
    tree = ET.parse(atom_path)
    root = tree.getroot()
    
    count = 0
    for entry in root.findall('atom:entry', namespaces):
        content_elem = entry.find('atom:content', namespaces)
        if content_elem is None or content_elem.text is None:
            continue
            
        title_elem = entry.find('atom:title', namespaces)
        title = title_elem.text if title_elem is not None and title_elem.text else "Untitled Post"
        
        published_elem = entry.find('atom:published', namespaces)
        date_str = published_elem.text if published_elem is not None else datetime.now().isoformat()
        
        # Create a clean URL-friendly slug
        slug = re.sub(r'[^a-zA-Z0-9]+', '-', title.lower()).strip('-')
        if not slug:
            slug = f"post-{count}"
            
        body = html.unescape(content_elem.text)
        
        # Remove legacy style tags safely
        body = re.sub(r'<style[^>]*>.*?</style>', '', body, flags=re.DOTALL | re.IGNORECASE)
        
        # Strip remaining HTML tags
        body = re.sub(r'<[^>]+>', '', body)
        
        # Construct simple frontmatter
        frontmatter = "---\n"
        frontmatter += f'title: "{title}"\n'
        frontmatter += f'pubDate: {date_str}\n'
        frontmatter += f'description: "{title}"\n'
        frontmatter += "---\n\n"
        
        filepath = os.path.join(output_dir, f"{slug}.md")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(frontmatter + body.strip())
            
        count += 1
        
    print(f"Successfully cleaned and converted {count} posts to Markdown in: {output_dir}")

if __name__ == "__main__":
    parse_blogger_atom("feed.atom", "src/content/blogs")
