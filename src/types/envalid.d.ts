export class EnvError {
  static captureStackTrace(p0: any, p1: any): any;
  static stackTraceLimit: number;
  constructor(args: any);
  name: any;
}
export class EnvMissingError {
  static captureStackTrace(p0: any, p1: any): any;
  static stackTraceLimit: number;
  constructor(args: any);
  name: any;
}
export function bool(spec?: any): any;
export function cleanEnv(inputEnv: any, specs: any, options: any): any;
export function email(spec?: any): any;
export function host(spec?: any): any;
export function json(spec?: any): any;
export function makeValidator(parseFn: any, type: any): any;
export function num(spec?: any): any;
export function port(spec?: any): any;
export function str(spec?: any): any;
export function testOnly(defaultValueForTests: any): any;
export function url(spec?: any): any;
