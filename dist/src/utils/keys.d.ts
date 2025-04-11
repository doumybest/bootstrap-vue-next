import type { InjectionKey, Ref } from 'vue';
import type { ButtonVariant, CheckboxValue, ClassValue, ColorVariant, RadioValue, RadiusElement, Size, TabType, TextColorVariant } from '../types';
export declare const carouselInjectionKey: InjectionKey<{
    background: Readonly<Ref<string | undefined>>;
    width: Readonly<Ref<string | undefined>>;
    height: Readonly<Ref<string | undefined>>;
}>;
export declare const tabsInjectionKey: InjectionKey<{
    lazy: Readonly<Ref<boolean>>;
    card: Readonly<Ref<boolean>>;
    noFade: Readonly<Ref<boolean>>;
    registerTab: (tab: Readonly<Ref<TabType>>) => void;
    unregisterTab: (id: string) => void;
    activateTab: (id: string | undefined) => void;
    activeTabClass: Readonly<Ref<ClassValue>>;
    activeId: Readonly<Ref<string | undefined>>;
}>;
export declare const progressInjectionKey: InjectionKey<{
    animated: Readonly<Ref<boolean | undefined>>;
    max: Readonly<Ref<number | string>>;
    showProgress: Readonly<Ref<boolean | undefined>>;
    showValue: Readonly<Ref<boolean | undefined>>;
    striped: Readonly<Ref<boolean | undefined>>;
}>;
export declare const listGroupInjectionKey: InjectionKey<{
    numbered: Readonly<Ref<boolean>>;
}>;
export declare const avatarGroupInjectionKey: InjectionKey<{
    overlapScale: Readonly<Ref<number>>;
    size: Readonly<Ref<Size | string | undefined>>;
    square: Readonly<Ref<boolean>>;
    rounded: Readonly<Ref<RadiusElement | boolean>>;
    roundedTop: Readonly<Ref<RadiusElement | boolean | undefined>>;
    roundedBottom: Readonly<Ref<RadiusElement | boolean | undefined>>;
    roundedStart: Readonly<Ref<RadiusElement | boolean | undefined>>;
    roundedEnd: Readonly<Ref<RadiusElement | boolean | undefined>>;
    variant: Readonly<Ref<ColorVariant | null>>;
    bgVariant: Readonly<Ref<ColorVariant | null>>;
    textVariant: Readonly<Ref<TextColorVariant | null>>;
}>;
export declare const accordionInjectionKey: InjectionKey<{
    openItem: Readonly<Ref<string | undefined>>;
    free: Readonly<Ref<boolean>>;
    setOpenItem: (id: string) => void;
}>;
export declare const checkboxGroupKey: InjectionKey<{
    modelValue: Ref<CheckboxValue[]>;
    switch: Readonly<Ref<boolean>>;
    buttonVariant: Readonly<Ref<ButtonVariant | null>>;
    form: Readonly<Ref<string | undefined>>;
    name: Readonly<Ref<string>>;
    state: Readonly<Ref<boolean | undefined | null>>;
    plain: Readonly<Ref<boolean>>;
    size: Readonly<Ref<Size>>;
    inline: Readonly<Ref<boolean>>;
    required: Readonly<Ref<boolean>>;
    buttons: Readonly<Ref<boolean>>;
    disabled: Readonly<Ref<boolean>>;
}>;
export declare const radioGroupKey: InjectionKey<{
    modelValue: Ref<RadioValue>;
    buttonVariant: Readonly<Ref<ButtonVariant | null>>;
    form: Readonly<Ref<string | undefined>>;
    name: Readonly<Ref<string>>;
    buttons: Readonly<Ref<boolean>>;
    state: Readonly<Ref<boolean | undefined | null>>;
    plain: Readonly<Ref<boolean>>;
    size: Readonly<Ref<Size>>;
    inline: Readonly<Ref<boolean>>;
    required: Readonly<Ref<boolean>>;
    disabled: Readonly<Ref<boolean>>;
}>;
export declare const collapseInjectionKey: InjectionKey<{
    id?: Readonly<Ref<string>>;
    readonly close?: () => void;
    readonly open?: () => void;
    readonly toggle?: () => void;
    visible?: Readonly<Ref<boolean>>;
    isNav?: Readonly<Ref<boolean>>;
}>;
export declare const dropdownInjectionKey: InjectionKey<{
    id?: Readonly<Ref<string>>;
    readonly close?: () => void;
    readonly open?: () => void;
    readonly toggle?: () => void;
    visible?: Readonly<Ref<boolean>>;
    isNav?: Readonly<Ref<boolean>>;
}>;
export declare const navbarInjectionKey: InjectionKey<{
    tag?: Readonly<Ref<string>>;
    autoClose?: Readonly<Ref<boolean>>;
}>;
