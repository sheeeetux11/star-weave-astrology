globalThis.process ??= {};
globalThis.process.env ??= {};
//#region node_modules/piccolore/dist/index.js
var e = globalThis.process || {};
var t = e.argv || [];
var n = e.env || {};
var r = !(n.NO_COLOR || t.includes(`--no-color`)) && (!!n.FORCE_COLOR || t.includes(`--color`) || e.platform === `win32` || (e.stdout || {}).isTTY && n.TERM !== `dumb` || !!n.CI);
var i = (e, t, n = e) => (r) => {
	let i = `` + r, o = i.indexOf(t, e.length);
	return ~o ? e + a(i, t, n, o) + t : e + i + t;
};
var a = (e, t, n, r) => {
	let i = ``, a = 0;
	do
		i += e.substring(a, r) + n, a = r + t.length, r = e.indexOf(t, a);
	while (~r);
	return i + e.substring(a);
};
var o = (e = r) => {
	let t = e ? i : () => String;
	return {
		isColorSupported: e,
		reset: t(`\x1B[0m`, `\x1B[0m`),
		bold: t(`\x1B[1m`, `\x1B[22m`, `\x1B[22m\x1B[1m`),
		dim: t(`\x1B[2m`, `\x1B[22m`, `\x1B[22m\x1B[2m`),
		italic: t(`\x1B[3m`, `\x1B[23m`),
		underline: t(`\x1B[4m`, `\x1B[24m`),
		inverse: t(`\x1B[7m`, `\x1B[27m`),
		hidden: t(`\x1B[8m`, `\x1B[28m`),
		strikethrough: t(`\x1B[9m`, `\x1B[29m`),
		black: t(`\x1B[30m`, `\x1B[39m`),
		red: t(`\x1B[31m`, `\x1B[39m`),
		green: t(`\x1B[32m`, `\x1B[39m`),
		yellow: t(`\x1B[33m`, `\x1B[39m`),
		blue: t(`\x1B[34m`, `\x1B[39m`),
		magenta: t(`\x1B[35m`, `\x1B[39m`),
		cyan: t(`\x1B[36m`, `\x1B[39m`),
		white: t(`\x1B[37m`, `\x1B[39m`),
		gray: t(`\x1B[90m`, `\x1B[39m`),
		bgBlack: t(`\x1B[40m`, `\x1B[49m`),
		bgRed: t(`\x1B[41m`, `\x1B[49m`),
		bgGreen: t(`\x1B[42m`, `\x1B[49m`),
		bgYellow: t(`\x1B[43m`, `\x1B[49m`),
		bgBlue: t(`\x1B[44m`, `\x1B[49m`),
		bgMagenta: t(`\x1B[45m`, `\x1B[49m`),
		bgCyan: t(`\x1B[46m`, `\x1B[49m`),
		bgWhite: t(`\x1B[47m`, `\x1B[49m`),
		blackBright: t(`\x1B[90m`, `\x1B[39m`),
		redBright: t(`\x1B[91m`, `\x1B[39m`),
		greenBright: t(`\x1B[92m`, `\x1B[39m`),
		yellowBright: t(`\x1B[93m`, `\x1B[39m`),
		blueBright: t(`\x1B[94m`, `\x1B[39m`),
		magentaBright: t(`\x1B[95m`, `\x1B[39m`),
		cyanBright: t(`\x1B[96m`, `\x1B[39m`),
		whiteBright: t(`\x1B[97m`, `\x1B[39m`),
		bgBlackBright: t(`\x1B[100m`, `\x1B[49m`),
		bgRedBright: t(`\x1B[101m`, `\x1B[49m`),
		bgGreenBright: t(`\x1B[102m`, `\x1B[49m`),
		bgYellowBright: t(`\x1B[103m`, `\x1B[49m`),
		bgBlueBright: t(`\x1B[104m`, `\x1B[49m`),
		bgMagentaBright: t(`\x1B[105m`, `\x1B[49m`),
		bgCyanBright: t(`\x1B[106m`, `\x1B[49m`),
		bgWhiteBright: t(`\x1B[107m`, `\x1B[49m`)
	};
};
var s = o();
//#endregion
//#region node_modules/astro/dist/core/logger/core.js
var dateTimeFormat = new Intl.DateTimeFormat([], {
	hour: "2-digit",
	minute: "2-digit",
	second: "2-digit",
	hour12: false
});
var levels = {
	debug: 20,
	info: 30,
	warn: 40,
	error: 50,
	silent: 90
};
function log(opts, level, label, message, newLine = true) {
	const logLevel = opts.level;
	const dest = opts.destination;
	const event = {
		label,
		level,
		message,
		newLine
	};
	if (!isLogLevelEnabled(logLevel, level)) return;
	dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
	return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
	return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
	return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
	return log(opts, "error", label, message, newLine);
}
function debug(...args) {
	if ("_astroGlobalDebug" in globalThis) globalThis._astroGlobalDebug(...args);
}
function getEventPrefix({ level, label }) {
	const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
	const prefix = [];
	if (level === "error" || level === "warn") {
		prefix.push(s.bold(timestamp));
		prefix.push(`[${level.toUpperCase()}]`);
	} else prefix.push(timestamp);
	if (label) prefix.push(`[${label}]`);
	if (level === "error") return s.red(prefix.join(" "));
	if (level === "warn") return s.yellow(prefix.join(" "));
	if (prefix.length === 1) return s.dim(prefix[0]);
	return s.dim(prefix[0]) + " " + s.blue(prefix.splice(1).join(" "));
}
var AstroLogger = class {
	options;
	constructor(options) {
		this.options = options;
	}
	info(label, message, newLine = true) {
		info(this.options, label, message, newLine);
	}
	warn(label, message, newLine = true) {
		warn(this.options, label, message, newLine);
	}
	error(label, message, newLine = true) {
		error(this.options, label, message, newLine);
	}
	debug(label, ...messages) {
		debug(label, ...messages);
	}
	level() {
		return this.options.level;
	}
	forkIntegrationLogger(label) {
		return new AstroIntegrationLogger(this.options, label);
	}
	setDestination(destination) {
		this.options.destination = destination;
	}
	/**
	* It calls the `close` function of the provided destination, if it exists.
	*/
	close() {
		if (this.options.destination.close) this.options.destination.close();
	}
	/**
	* It calls the `flush` function of the provided destination, if it exists.
	*/
	flush() {
		if (this.options.destination.flush) this.options.destination.flush();
	}
};
var AstroIntegrationLogger = class AstroIntegrationLogger {
	options;
	label;
	constructor(logging, label) {
		this.options = logging;
		this.label = label;
	}
	/**
	* Creates a new logger instance with a new label, but the same log options.
	*/
	fork(label) {
		return new AstroIntegrationLogger(this.options, label);
	}
	info(message) {
		info(this.options, this.label, message);
	}
	warn(message) {
		warn(this.options, this.label, message);
	}
	error(message) {
		error(this.options, this.label, message);
	}
	debug(message) {
		debug(this.label, message);
	}
	/**
	* It calls the `flush` function of the provided destination, if it exists.
	*/
	flush() {
		if (this.options.destination.flush) this.options.destination.flush();
	}
	/**
	* It calls the `close` function of the provided destination, if it exists.
	*/
	close() {
		if (this.options.destination.close) this.options.destination.close();
	}
};
function astroToRuntimeLogger(logger) {
	return {
		info(msg) {
			logger.info(null, msg);
		},
		warn(msg) {
			logger.warn(null, msg);
		},
		error(msg) {
			logger.error(null, msg);
		}
	};
}
//#endregion
//#region node_modules/astro/dist/core/logger/public.js
function matchesLevel(messageLevel, configuredLevel) {
	return levels[messageLevel] >= levels[configuredLevel];
}
//#endregion
//#region node_modules/astro/dist/core/logger/impls/console.js
function consoleLogDestination(config = {}) {
	const { level = "info" } = config;
	return { write(event) {
		let dest = console.error;
		if (levels[event.level] < levels["error"]) dest = console.info;
		if (!matchesLevel(event.level, level)) return;
		if (event.label === "SKIP_FORMAT") dest(event.message);
		else dest(getEventPrefix(event) + " " + event.message);
	} };
}
function createConsoleLogger({ level }) {
	return new AstroLogger({
		level,
		destination: consoleLogDestination()
	});
}
//#endregion
export { s as i, AstroIntegrationLogger as n, astroToRuntimeLogger as r, createConsoleLogger as t };
