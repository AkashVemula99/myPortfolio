import AboutMe from "./components/AboutMe.vue";
import Contact from "./components/Contact.vue";
import Experience from "./components/Experience.vue";
import Education from "./components/Education.vue";
import Certification from "./components/Certification.vue";
import Objective from "./components/Objective.vue";
/* Scroll to section function */
const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
        ...{ class: ("navbar navbar-expand-lg navbar-dark bg-dark fixed-top") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("container") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        ...{ class: ("navbar-brand") },
        href: ("#"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ class: ("navbar-toggler") },
        type: ("button"),
        'data-bs-toggle': ("collapse"),
        'data-bs-target': ("#navbarNav"),
        'aria-controls': ("navbarNav"),
        'aria-expanded': ("false"),
        'aria-label': ("Toggle navigation"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("navbar-toggler-icon") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("collapse navbar-collapse") },
        id: ("navbarNav"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: ("navbar-nav ms-auto") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ class: ("nav-item") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.scrollToSection('about');
            } },
        ...{ class: ("nav-link btn") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ class: ("nav-item") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.scrollToSection('objective');
            } },
        ...{ class: ("nav-link btn") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ class: ("nav-item") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.scrollToSection('education');
            } },
        ...{ class: ("nav-link btn") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ class: ("nav-item") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.scrollToSection('certification');
            } },
        ...{ class: ("nav-link btn") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ class: ("nav-item") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.scrollToSection('experience');
            } },
        ...{ class: ("nav-link btn") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ class: ("nav-item") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.scrollToSection('contact');
            } },
        ...{ class: ("nav-link btn") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ class: ("nav-item") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ class: ("nav-link btn") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("files/resume_akash.docx"),
        download: (true),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        id: ("about"),
        ...{ class: ("section") },
    });
    // @ts-ignore
    /** @type { [typeof AboutMe, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(AboutMe, new AboutMe({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        id: ("objective"),
        ...{ class: ("section") },
    });
    // @ts-ignore
    /** @type { [typeof Objective, ] } */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(Objective, new Objective({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        id: ("education"),
        ...{ class: ("section") },
    });
    // @ts-ignore
    /** @type { [typeof Education, ] } */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(Education, new Education({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        id: ("certification"),
        ...{ class: ("section") },
    });
    // @ts-ignore
    /** @type { [typeof Certification, ] } */ ;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(Certification, new Certification({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        id: ("experience"),
        ...{ class: ("section") },
    });
    // @ts-ignore
    /** @type { [typeof Experience, ] } */ ;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(Experience, new Experience({}));
    const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        id: ("contact"),
        ...{ class: ("section") },
    });
    // @ts-ignore
    /** @type { [typeof Contact, ] } */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(Contact, new Contact({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ['navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark', 'fixed-top', 'container', 'navbar-brand', 'navbar-toggler', 'navbar-toggler-icon', 'collapse', 'navbar-collapse', 'navbar-nav', 'ms-auto', 'nav-item', 'nav-link', 'btn', 'nav-item', 'nav-link', 'btn', 'nav-item', 'nav-link', 'btn', 'nav-item', 'nav-link', 'btn', 'nav-item', 'nav-link', 'btn', 'nav-item', 'nav-link', 'btn', 'nav-item', 'nav-link', 'btn', 'section', 'section', 'section', 'section', 'section', 'section',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            AboutMe: AboutMe,
            Contact: Contact,
            Experience: Experience,
            Education: Education,
            Certification: Certification,
            Objective: Objective,
            scrollToSection: scrollToSection,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
