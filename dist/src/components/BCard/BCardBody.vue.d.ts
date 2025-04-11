import type { Booleanish, ColorExtendables } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    overlay?: Booleanish | undefined;
    subtitle?: string | undefined;
    subtitleTag?: string | undefined;
    subtitleTextVariant?: keyof import("../../types").BaseTextColorVariant | null | undefined;
    tag?: string | undefined;
    text?: string | undefined;
    title?: string | undefined;
    titleTag?: string | undefined;
} & ColorExtendables>, {
    overlay: boolean;
    subtitle: undefined;
    subtitleTag: string;
    subtitleTextVariant: undefined;
    tag: string;
    text: undefined;
    title: undefined;
    titleTag: string;
    bgVariant: null;
    textVariant: null;
    variant: null;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    overlay?: Booleanish | undefined;
    subtitle?: string | undefined;
    subtitleTag?: string | undefined;
    subtitleTextVariant?: keyof import("../../types").BaseTextColorVariant | null | undefined;
    tag?: string | undefined;
    text?: string | undefined;
    title?: string | undefined;
    titleTag?: string | undefined;
} & ColorExtendables>, {
    overlay: boolean;
    subtitle: undefined;
    subtitleTag: string;
    subtitleTextVariant: undefined;
    tag: string;
    text: undefined;
    title: undefined;
    titleTag: string;
    bgVariant: null;
    textVariant: null;
    variant: null;
}>>>, {
    tag: string;
    title: string;
    text: string;
    variant: keyof import("../../types").BaseColorVariant | null;
    bgVariant: keyof import("../../types").BaseColorVariant | null;
    textVariant: keyof import("../../types").BaseTextColorVariant | null;
    overlay: Booleanish;
    subtitle: string;
    subtitleTag: string;
    subtitleTextVariant: keyof import("../../types").BaseTextColorVariant | null;
    titleTag: string;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
    subtitle?: ((props: Record<string, never>) => any) | undefined;
    title?: ((props: Record<string, never>) => any) | undefined;
}>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
