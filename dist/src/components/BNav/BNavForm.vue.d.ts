import type { BFormProps } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    role?: string | undefined;
} & BFormProps>, {
    role: undefined;
    floating: undefined;
    id: undefined;
    novalidate: undefined;
    validated: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    submit: (value: Event) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    role?: string | undefined;
} & BFormProps>, {
    role: undefined;
    floating: undefined;
    id: undefined;
    novalidate: undefined;
    validated: undefined;
}>>> & {
    onSubmit?: ((value: Event) => any) | undefined;
}, {
    id: string;
    role: string;
    floating: import("../../types").Booleanish;
    novalidate: import("../../types").Booleanish;
    validated: import("../../types").Booleanish;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
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
