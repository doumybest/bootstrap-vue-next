import type { Toast } from '../types';
declare const _default: () => {
    toasts: import("vue").Ref<{
        target?: import("../types").LinkTarget | undefined;
        to?: string | {
            query?: import("vue-router").LocationQueryRaw | undefined;
            hash?: string | undefined;
            path: string;
            replace?: boolean | undefined;
            force?: boolean | undefined;
            state?: import("vue-router").HistoryState | undefined;
        } | {
            query?: import("vue-router").LocationQueryRaw | undefined;
            hash?: string | undefined;
            name?: import("vue-router").RouteRecordName | undefined;
            params?: import("vue-router").RouteParamsRaw | undefined;
            replace?: boolean | undefined;
            force?: boolean | undefined;
            state?: import("vue-router").HistoryState | undefined;
        } | undefined;
        body?: string | undefined;
        title?: string | undefined;
        disabled?: import("../types").Booleanish | undefined;
        href?: string | undefined;
        id?: string | undefined;
        rel?: string | undefined;
        active?: import("../types").Booleanish | undefined;
        activeClass?: string | undefined;
        append?: import("../types").Booleanish | undefined;
        replace?: import("../types").Booleanish | undefined;
        routerComponentName?: string | undefined;
        variant?: keyof import("../types").BaseColorVariant | null | undefined;
        opacity?: 10 | "10" | 25 | 50 | 75 | 100 | "25" | "50" | "75" | "100" | undefined;
        opacityHover?: 10 | "10" | 25 | 50 | 75 | 100 | "25" | "50" | "75" | "100" | undefined;
        underlineVariant?: keyof import("../types").BaseColorVariant | null | undefined;
        underlineOffset?: 1 | 2 | 3 | "1" | "2" | "3" | undefined;
        underlineOffsetHover?: 1 | 2 | 3 | "1" | "2" | "3" | undefined;
        underlineOpacity?: 0 | 10 | "0" | "10" | 25 | 50 | 75 | 100 | "25" | "50" | "75" | "100" | undefined;
        underlineOpacityHover?: 0 | 10 | "0" | "10" | 25 | 50 | 75 | 100 | "25" | "50" | "75" | "100" | undefined;
        exactActiveClass?: string | undefined;
        icon?: import("../types").Booleanish | undefined;
        animation?: import("../types").Booleanish | undefined;
        autoHide?: import("../types").Booleanish | undefined;
        bodyClass?: any;
        delay?: string | number | undefined;
        headerClass?: any;
        headerTag?: string | undefined;
        interval?: string | number | undefined;
        isStatus?: import("../types").Booleanish | undefined;
        noCloseButton?: import("../types").Booleanish | undefined;
        noFade?: import("../types").Booleanish | undefined;
        noHoverPause?: import("../types").Booleanish | undefined;
        progressProps?: {
            variant?: keyof import("../types").BaseColorVariant | null | undefined;
            bgVariant?: keyof import("../types").BaseColorVariant | null | undefined;
            textVariant?: keyof import("../types").BaseTextColorVariant | null | undefined;
            animated?: import("../types").Booleanish | undefined;
            precision?: string | number | undefined;
            showProgress?: import("../types").Booleanish | undefined;
            showValue?: import("../types").Booleanish | undefined;
            striped?: import("../types").Booleanish | undefined;
        } | undefined;
        showOnPause?: import("../types").Booleanish | undefined;
        solid?: import("../types").Booleanish | undefined;
        toastClass?: any;
        bgVariant?: keyof import("../types").BaseColorVariant | null | undefined;
        textVariant?: keyof import("../types").BaseTextColorVariant | null | undefined;
        pos?: "top-right" | "top-center" | "top-left" | "bottom-center" | "bottom-left" | "bottom-right" | "middle-center" | "middle-left" | "middle-right" | undefined;
        value?: number | boolean | undefined;
        self: symbol;
    }[]>;
    show: (...[el, obj]: [el: string, obj?: Omit<Toast, "body"> | undefined] | [el: Toast]) => symbol;
    hide: (self: symbol) => void;
};
export default _default;
