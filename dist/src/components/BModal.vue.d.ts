import { type RendererElement } from 'vue';
import type { Booleanish, Breakpoint } from '../types';
import { BvTriggerableEvent } from '../utils';
type SharedSlotsData = {
    cancel: () => void;
    close: () => void;
    hide: (trigger?: string) => void;
    ok: () => void;
    visible: boolean;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    autoFocus?: Booleanish | undefined;
    autoFocusButton?: "close" | "cancel" | "ok" | undefined;
    backdropVariant?: keyof import("../types").BaseColorVariant | null | undefined;
    bodyBgVariant?: keyof import("../types").BaseColorVariant | null | undefined;
    bodyClass?: any;
    bodyScrolling?: Booleanish | undefined;
    bodyTextVariant?: keyof import("../types").BaseTextColorVariant | null | undefined;
    bodyVariant?: keyof import("../types").BaseColorVariant | null | undefined;
    busy?: Booleanish | undefined;
    buttonSize?: keyof import("../types").BaseSize | undefined;
    cancelDisabled?: Booleanish | undefined;
    cancelTitle?: string | undefined;
    cancelVariant?: keyof import("../types").BaseButtonVariant | null | undefined;
    centered?: Booleanish | undefined;
    contentClass?: any;
    dialogClass?: any;
    footerBgVariant?: keyof import("../types").BaseColorVariant | null | undefined;
    footerBorderVariant?: keyof import("../types").BaseColorVariant | null | undefined;
    footerClass?: any;
    footerTextVariant?: keyof import("../types").BaseTextColorVariant | null | undefined;
    footerVariant?: keyof import("../types").BaseColorVariant | null | undefined;
    fullscreen?: Booleanish | Breakpoint | undefined;
    headerBgVariant?: keyof import("../types").BaseColorVariant | null | undefined;
    headerBorderVariant?: keyof import("../types").BaseColorVariant | null | undefined;
    headerClass?: any;
    headerCloseClass?: any;
    headerCloseLabel?: string | undefined;
    headerCloseVariant?: keyof import("../types").BaseButtonVariant | null | undefined;
    headerTextVariant?: keyof import("../types").BaseTextColorVariant | null | undefined;
    headerVariant?: keyof import("../types").BaseColorVariant | null | undefined;
    hideBackdrop?: Booleanish | undefined;
    hideFooter?: Booleanish | undefined;
    hideHeader?: Booleanish | undefined;
    hideHeaderClose?: Booleanish | undefined;
    id?: string | undefined;
    lazy?: Booleanish | undefined;
    modalClass?: any;
    modelValue?: Booleanish | undefined;
    noCloseOnBackdrop?: Booleanish | undefined;
    noCloseOnEsc?: Booleanish | undefined;
    noFade?: Booleanish | undefined;
    okDisabled?: Booleanish | undefined;
    okOnly?: Booleanish | undefined;
    okTitle?: string | undefined;
    okVariant?: keyof import("../types").BaseButtonVariant | null | undefined;
    scrollable?: Booleanish | undefined;
    size?: "xl" | keyof import("../types").BaseSize | undefined;
    teleportDisabled?: Booleanish | undefined;
    teleportTo?: string | RendererElement | null | undefined;
    title?: string | undefined;
    titleClass?: any;
    titleSrOnly?: Booleanish | undefined;
    titleTag?: string | undefined;
}>, {
    autoFocus: boolean;
    autoFocusButton: undefined;
    backdropVariant: undefined;
    bodyBgVariant: null;
    bodyClass: undefined;
    bodyScrolling: boolean;
    bodyTextVariant: null;
    bodyVariant: null;
    busy: boolean;
    buttonSize: string;
    cancelDisabled: boolean;
    cancelTitle: string;
    cancelVariant: string;
    centered: boolean;
    contentClass: undefined;
    dialogClass: undefined;
    footerBgVariant: null;
    footerBorderVariant: null;
    footerClass: undefined;
    footerTextVariant: null;
    footerVariant: null;
    fullscreen: boolean;
    headerBgVariant: null;
    headerBorderVariant: null;
    headerClass: undefined;
    headerCloseClass: undefined;
    headerCloseLabel: string;
    headerCloseVariant: string;
    headerTextVariant: null;
    headerVariant: null;
    hideBackdrop: boolean;
    hideFooter: boolean;
    hideHeader: boolean;
    hideHeaderClose: boolean;
    id: undefined;
    lazy: boolean;
    modalClass: undefined;
    modelValue: boolean;
    noCloseOnBackdrop: boolean;
    noCloseOnEsc: boolean;
    noFade: boolean;
    okDisabled: boolean;
    okOnly: boolean;
    okTitle: string;
    okVariant: string;
    scrollable: boolean;
    size: string;
    teleportDisabled: boolean;
    teleportTo: string;
    title: undefined;
    titleClass: undefined;
    titleSrOnly: boolean;
    titleTag: string;
}>, {
    hide: (trigger?: string) => void;
    id: import("vue").ComputedRef<string>;
    show: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (value: BvTriggerableEvent) => void;
    "update:modelValue": (value: boolean) => void;
    show: (value: BvTriggerableEvent) => void;
    hide: (value: BvTriggerableEvent) => void;
    hidden: (value: BvTriggerableEvent) => void;
    "hide-prevented": () => void;
    "show-prevented": () => void;
    shown: (value: BvTriggerableEvent) => void;
    cancel: (value: BvTriggerableEvent) => void;
    ok: (value: BvTriggerableEvent) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    autoFocus?: Booleanish | undefined;
    autoFocusButton?: "close" | "cancel" | "ok" | undefined;
    backdropVariant?: keyof import("../types").BaseColorVariant | null | undefined;
    bodyBgVariant?: keyof import("../types").BaseColorVariant | null | undefined;
    bodyClass?: any;
    bodyScrolling?: Booleanish | undefined;
    bodyTextVariant?: keyof import("../types").BaseTextColorVariant | null | undefined;
    bodyVariant?: keyof import("../types").BaseColorVariant | null | undefined;
    busy?: Booleanish | undefined;
    buttonSize?: keyof import("../types").BaseSize | undefined;
    cancelDisabled?: Booleanish | undefined;
    cancelTitle?: string | undefined;
    cancelVariant?: keyof import("../types").BaseButtonVariant | null | undefined;
    centered?: Booleanish | undefined;
    contentClass?: any;
    dialogClass?: any;
    footerBgVariant?: keyof import("../types").BaseColorVariant | null | undefined;
    footerBorderVariant?: keyof import("../types").BaseColorVariant | null | undefined;
    footerClass?: any;
    footerTextVariant?: keyof import("../types").BaseTextColorVariant | null | undefined;
    footerVariant?: keyof import("../types").BaseColorVariant | null | undefined;
    fullscreen?: Booleanish | Breakpoint | undefined;
    headerBgVariant?: keyof import("../types").BaseColorVariant | null | undefined;
    headerBorderVariant?: keyof import("../types").BaseColorVariant | null | undefined;
    headerClass?: any;
    headerCloseClass?: any;
    headerCloseLabel?: string | undefined;
    headerCloseVariant?: keyof import("../types").BaseButtonVariant | null | undefined;
    headerTextVariant?: keyof import("../types").BaseTextColorVariant | null | undefined;
    headerVariant?: keyof import("../types").BaseColorVariant | null | undefined;
    hideBackdrop?: Booleanish | undefined;
    hideFooter?: Booleanish | undefined;
    hideHeader?: Booleanish | undefined;
    hideHeaderClose?: Booleanish | undefined;
    id?: string | undefined;
    lazy?: Booleanish | undefined;
    modalClass?: any;
    modelValue?: Booleanish | undefined;
    noCloseOnBackdrop?: Booleanish | undefined;
    noCloseOnEsc?: Booleanish | undefined;
    noFade?: Booleanish | undefined;
    okDisabled?: Booleanish | undefined;
    okOnly?: Booleanish | undefined;
    okTitle?: string | undefined;
    okVariant?: keyof import("../types").BaseButtonVariant | null | undefined;
    scrollable?: Booleanish | undefined;
    size?: "xl" | keyof import("../types").BaseSize | undefined;
    teleportDisabled?: Booleanish | undefined;
    teleportTo?: string | RendererElement | null | undefined;
    title?: string | undefined;
    titleClass?: any;
    titleSrOnly?: Booleanish | undefined;
    titleTag?: string | undefined;
}>, {
    autoFocus: boolean;
    autoFocusButton: undefined;
    backdropVariant: undefined;
    bodyBgVariant: null;
    bodyClass: undefined;
    bodyScrolling: boolean;
    bodyTextVariant: null;
    bodyVariant: null;
    busy: boolean;
    buttonSize: string;
    cancelDisabled: boolean;
    cancelTitle: string;
    cancelVariant: string;
    centered: boolean;
    contentClass: undefined;
    dialogClass: undefined;
    footerBgVariant: null;
    footerBorderVariant: null;
    footerClass: undefined;
    footerTextVariant: null;
    footerVariant: null;
    fullscreen: boolean;
    headerBgVariant: null;
    headerBorderVariant: null;
    headerClass: undefined;
    headerCloseClass: undefined;
    headerCloseLabel: string;
    headerCloseVariant: string;
    headerTextVariant: null;
    headerVariant: null;
    hideBackdrop: boolean;
    hideFooter: boolean;
    hideHeader: boolean;
    hideHeaderClose: boolean;
    id: undefined;
    lazy: boolean;
    modalClass: undefined;
    modelValue: boolean;
    noCloseOnBackdrop: boolean;
    noCloseOnEsc: boolean;
    noFade: boolean;
    okDisabled: boolean;
    okOnly: boolean;
    okTitle: string;
    okVariant: string;
    scrollable: boolean;
    size: string;
    teleportDisabled: boolean;
    teleportTo: string;
    title: undefined;
    titleClass: undefined;
    titleSrOnly: boolean;
    titleTag: string;
}>>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onShow?: ((value: BvTriggerableEvent) => any) | undefined;
    onHide?: ((value: BvTriggerableEvent) => any) | undefined;
    onHidden?: ((value: BvTriggerableEvent) => any) | undefined;
    "onHide-prevented"?: (() => any) | undefined;
    "onShow-prevented"?: (() => any) | undefined;
    onShown?: ((value: BvTriggerableEvent) => any) | undefined;
    onClose?: ((value: BvTriggerableEvent) => any) | undefined;
    onCancel?: ((value: BvTriggerableEvent) => any) | undefined;
    onOk?: ((value: BvTriggerableEvent) => any) | undefined;
}, {
    title: string;
    id: string;
    size: "xl" | keyof import("../types").BaseSize;
    lazy: Booleanish;
    modelValue: Booleanish;
    bodyClass: any;
    headerClass: any;
    noFade: Booleanish;
    titleTag: string;
    bodyBgVariant: keyof import("../types").BaseColorVariant | null;
    bodyTextVariant: keyof import("../types").BaseTextColorVariant | null;
    footerBgVariant: keyof import("../types").BaseColorVariant | null;
    footerBorderVariant: keyof import("../types").BaseColorVariant | null;
    footerClass: any;
    footerTextVariant: keyof import("../types").BaseTextColorVariant | null;
    footerVariant: keyof import("../types").BaseColorVariant | null;
    headerBgVariant: keyof import("../types").BaseColorVariant | null;
    headerBorderVariant: keyof import("../types").BaseColorVariant | null;
    headerTextVariant: keyof import("../types").BaseTextColorVariant | null;
    headerVariant: keyof import("../types").BaseColorVariant | null;
    autoFocus: Booleanish;
    autoFocusButton: "close" | "cancel" | "ok";
    backdropVariant: keyof import("../types").BaseColorVariant | null;
    bodyScrolling: Booleanish;
    bodyVariant: keyof import("../types").BaseColorVariant | null;
    busy: Booleanish;
    buttonSize: keyof import("../types").BaseSize;
    cancelDisabled: Booleanish;
    cancelTitle: string;
    cancelVariant: keyof import("../types").BaseButtonVariant | null;
    centered: Booleanish;
    contentClass: any;
    dialogClass: any;
    fullscreen: Booleanish | Breakpoint;
    headerCloseClass: any;
    headerCloseLabel: string;
    headerCloseVariant: keyof import("../types").BaseButtonVariant | null;
    hideBackdrop: Booleanish;
    hideFooter: Booleanish;
    hideHeader: Booleanish;
    hideHeaderClose: Booleanish;
    modalClass: any;
    noCloseOnBackdrop: Booleanish;
    noCloseOnEsc: Booleanish;
    okDisabled: Booleanish;
    okOnly: Booleanish;
    okTitle: string;
    okVariant: keyof import("../types").BaseButtonVariant | null;
    scrollable: Booleanish;
    teleportDisabled: Booleanish;
    teleportTo: string | RendererElement | null;
    titleClass: any;
    titleSrOnly: Booleanish;
}, {}>, Readonly<{
    backdrop?: ((props: Record<string, never>) => any) | undefined;
    cancel?: ((props: SharedSlotsData) => any) | undefined;
    default?: ((props: SharedSlotsData) => any) | undefined;
    footer?: ((props: SharedSlotsData) => any) | undefined;
    header?: ((props: SharedSlotsData) => any) | undefined;
    'header-close'?: ((props: Record<string, never>) => any) | undefined;
    ok?: ((props: SharedSlotsData) => any) | undefined;
    title?: ((props: SharedSlotsData) => any) | undefined;
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
