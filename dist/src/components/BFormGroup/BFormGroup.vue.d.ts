import { type PropType } from 'vue';
import type { AriaInvalid, Booleanish } from '../../types';
export declare const SLOT_NAME_LABEL = "label";
export declare const SLOT_NAME_INVALID_FEEDBACK = "invalid-feedback";
export declare const SLOT_NAME_VALID_FEEDBACK = "valid-feedback";
export declare const SLOT_NAME_DESCRIPTION = "description";
export declare const SLOT_NAME_DEFAULT = "default";
declare const _default: import("vue").DefineComponent<{
    ariaInvalid: {
        type: PropType<AriaInvalid>;
        default: undefined;
    };
    contentCols: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    contentColsLg: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    contentColsMd: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    contentColsSm: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    contentColsXl: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    description: {
        type: StringConstructor[];
        default: undefined;
    };
    disabled: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    feedbackAriaLive: {
        type: StringConstructor;
        default: string;
    };
    id: {
        type: StringConstructor;
        default: undefined;
    };
    invalidFeedback: {
        type: StringConstructor;
        default: undefined;
    };
    label: {
        type: StringConstructor;
        default: undefined;
    };
    labelAlign: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelAlignLg: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelAlignMd: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelAlignSm: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelAlignXl: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        default: undefined;
    };
    labelCols: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelColsLg: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelColsMd: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelColsSm: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelColsXl: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelFor: {
        type: StringConstructor;
        default: undefined;
    };
    labelSize: {
        type: StringConstructor;
        default: undefined;
    };
    labelSrOnly: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    state: {
        type: PropType<Booleanish | null>;
        default: null;
    };
    tooltip: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    validFeedback: {
        type: StringConstructor;
        default: undefined;
    };
    validated: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    floating: {
        type: PropType<Booleanish>;
        default: boolean;
    };
}, {
    disabledBoolean: import("vue").ComputedRef<boolean>;
    labelSrOnlyBoolean: import("vue").ComputedRef<boolean>;
    stateBoolean: import("vue").ComputedRef<boolean | null>;
    tooltipBoolean: import("vue").ComputedRef<boolean>;
    validatedBoolean: import("vue").ComputedRef<boolean>;
    floatingBoolean: import("vue").ComputedRef<boolean>;
    ariaDescribedby: string | null;
    computedAriaInvalid: import("vue").ComputedRef<"true" | "false" | "grammar" | "spelling" | undefined>;
    contentColProps: import("vue").ComputedRef<any>;
    isHorizontal: import("vue").ComputedRef<boolean>;
    labelAlignClasses: import("vue").ComputedRef<string[]>;
    labelColProps: import("vue").ComputedRef<any>;
    onLegendClick: (event: MouseEvent) => void;
    stateClass: import("vue").ComputedRef<"is-valid" | "is-invalid" | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    ariaInvalid: {
        type: PropType<AriaInvalid>;
        default: undefined;
    };
    contentCols: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    contentColsLg: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    contentColsMd: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    contentColsSm: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    contentColsXl: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    description: {
        type: StringConstructor[];
        default: undefined;
    };
    disabled: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    feedbackAriaLive: {
        type: StringConstructor;
        default: string;
    };
    id: {
        type: StringConstructor;
        default: undefined;
    };
    invalidFeedback: {
        type: StringConstructor;
        default: undefined;
    };
    label: {
        type: StringConstructor;
        default: undefined;
    };
    labelAlign: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelAlignLg: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelAlignMd: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelAlignSm: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelAlignXl: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        default: undefined;
    };
    labelCols: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelColsLg: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelColsMd: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelColsSm: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelColsXl: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelFor: {
        type: StringConstructor;
        default: undefined;
    };
    labelSize: {
        type: StringConstructor;
        default: undefined;
    };
    labelSrOnly: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    state: {
        type: PropType<Booleanish | null>;
        default: null;
    };
    tooltip: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    validFeedback: {
        type: StringConstructor;
        default: undefined;
    };
    validated: {
        type: PropType<Booleanish>;
        default: boolean;
    };
    floating: {
        type: PropType<Booleanish>;
        default: boolean;
    };
}>>, {
    label: string;
    disabled: Booleanish;
    id: string;
    description: string;
    state: Booleanish | null;
    ariaInvalid: AriaInvalid;
    tooltip: Booleanish;
    floating: Booleanish;
    validated: Booleanish;
    labelFor: string;
    labelClass: string | Record<string, any> | unknown[];
    contentCols: string | number | boolean;
    contentColsLg: string | number | boolean;
    contentColsMd: string | number | boolean;
    contentColsSm: string | number | boolean;
    contentColsXl: string | number | boolean;
    feedbackAriaLive: string;
    invalidFeedback: string;
    labelAlign: string | number | boolean;
    labelAlignLg: string | number | boolean;
    labelAlignMd: string | number | boolean;
    labelAlignSm: string | number | boolean;
    labelAlignXl: string | number | boolean;
    labelCols: string | number | boolean;
    labelColsLg: string | number | boolean;
    labelColsMd: string | number | boolean;
    labelColsSm: string | number | boolean;
    labelColsXl: string | number | boolean;
    labelSize: string;
    labelSrOnly: Booleanish;
    validFeedback: string;
}, {}>;
export default _default;
