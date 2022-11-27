/// <reference types="miniprogram-api-typings" />
/// <reference types="miniprogram-api-typings" />
/// <reference types="miniprogram-api-typings" />
/// <reference types="miniprogram-api-typings" />
/// <reference types="miniprogram-api-typings" />
export interface RouteConfigRaw {
    type?: "tab";
    path: string;
    name: string;
    meta?: WechatMiniprogram.IAnyObject;
}
export declare type RouteNameOptions = {
    name: string;
    params: WechatMiniprogram.IAnyObject;
};
export declare type RoutePathOptions = {
    path: string;
    params: WechatMiniprogram.IAnyObject;
};
export declare type RouteOptions = {
    name?: string;
    path?: string;
    params?: WechatMiniprogram.IAnyObject;
    delay?: number;
};
export declare type RouteBackOptions = RouteOptions & {
    level?: number;
};
export declare type CallbackResult = WechatMiniprogram.GeneralCallbackResult;
export declare type Callback<R = any> = (...args: any) => R;
export declare type AppOptions = WechatMiniprogram.App.Options<{
    $router: any;
}>;
export declare type PageOptions = WechatMiniprogram.Page.Options<{}, {
    $router: any;
}>;
export declare type ComponentOptions = WechatMiniprogram.Component.Options<{}, {}, {}, {
    $router: any;
}>;
export declare type BeforeHookRouteOptions = (RouteOptions & {
    replace: boolean;
}) | false | true | string;
export declare type JumpObject = {
    promise: Promise<CallbackResult>;
    resolve: Callback;
    reject: Callback;
    fn: Callback;
};
