import { getCurrentInstance, reactive, watch, set } from '@vue/composition-api';
import router from '@/router';

export const useRouter = () => router;

/** @type {import('vue-router').Route} */
let reactiveRoute = reactive({});
export const useRoute = () => {
    const vm = getCurrentInstance();
    if (!vm) {
        throw new Error('useRoute must be called in setup');
    }
    watch(
        () => vm.proxy.$route,
        () => {
            Object.entries(vm.proxy.$route).forEach(([key, value]) => {
                if (key in reactiveRoute) {
                    reactiveRoute[key] = value;
                } else {
                    set(reactiveRoute, key, value);
                }
            });
        },
        {
            immediate: true
        }
    );
    return reactiveRoute;
};
