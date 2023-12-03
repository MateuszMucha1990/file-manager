import TextInput from '../TextInput.vue';

const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_componentsOption = {};
let __VLS_name!: 'SearchForm';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'TextInput', typeof __VLS_localComponents, "TextInput", "TextInput", "TextInput">;
__VLS_intrinsicElements.form; __VLS_intrinsicElements.form;
__VLS_components.TextInput;
// @ts-ignore
[TextInput,];
{
const __VLS_0 = __VLS_intrinsicElements["form"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, action: (""), class: ("w-[600px] h-[80px] flex items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, action: (""), class: ("w-[600px] h-[80px] flex items-center"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'TextInput' extends keyof typeof __VLS_ctx ? { 'TextInput': typeof __VLS_ctx.TextInput; } : typeof __VLS_resolvedLocalAndGlobalComponents).TextInput;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, type: ("text"), class: ("block w-full mg-2"), modelValue: ((__VLS_ctx.form.search)), autocomplete: (true), placeHolder: ("Search for file and folders"), }));
({} as { TextInput: typeof __VLS_5; }).TextInput;
const __VLS_7 = __VLS_6({ ...{}, type: ("text"), class: ("block w-full mg-2"), modelValue: ((__VLS_ctx.form.search)), autocomplete: (true), placeHolder: ("Search for file and folders"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, type: ("text"), class: ("block w-full mg-2"), modelValue: ((__VLS_ctx.form.search)), autocomplete: (true), placeHolder: ("Search for file and folders"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[form, form, form,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
TextInput: TextInput as typeof TextInput,
};
},
});
export default (await import('vue')).defineComponent({
setup() {
return {};
},
});
