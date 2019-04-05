export class ClassTransformer {
  classToClass(object: any, options: any): any;
  classToClassFromExist(object: any, fromObject: any, options: any): any;
  classToPlain(object: any, options: any): any;
  classToPlainFromExist(object: any, plainObject: any, options: any): any;
  deserialize(cls: any, json: any, options: any): any;
  deserializeArray(cls: any, json: any, options: any): any;
  plainToClass(cls: any, plain: any, options: any): any;
  plainToClassFromExist(clsObject: any, plain: any, options: any): any;
  serialize(object: any, options: any): any;
}
export function Exclude(options: any): any;
export function Expose(options: any): any;
export function Transform(transformFn: any, options: any): any;
export function TransformClassToClass(params: any): any;
export function TransformClassToPlain(params: any): any;
export function TransformPlainToClass(classType: any, params: any): any;
export const TransformationType: {
  "0": string;
  "1": string;
  "2": string;
  CLASS_TO_CLASS: number;
  CLASS_TO_PLAIN: number;
  PLAIN_TO_CLASS: number;
};
export function Type(typeFunction: any, options: any): any;
export function classToClass(object: any, options: any): any;
export function classToClassFromExist(object: any, fromObject: any, options: any): any;
export function classToPlain(object: any, options: any): any;
export function classToPlainFromExist(object: any, plainObject: any, options: any): any;
export function deserialize(cls: any, json: any, options: any): any;
export function deserializeArray(cls: any, json: any, options: any): any;
export function plainToClass(cls: any, plain: any, options?: any): any;
export function plainToClassFromExist(clsObject: any, plain: any, options: any): any;
export function serialize(object: any, options: any): any;
