# Composables - Table of Contents

<div class="lead mb-5">

BootstrapVueNext exposes some custom composables that integrate with various components.

</div>

<TableOfContentsCard v-for="composable in computedComposablesList" :key="composable.name" class="my-3" :name="composable.name" :description="composable.description" :route="composable.route" />

<script setup lang="ts">
import {withBase} from 'vitepress'
import {computed} from 'vue'
import TableOfContentsCard from '../components/TableOfContentsCard.vue'

const routeLocation = (name: string): string => withBase(`/docs/composables/${name}`).trim()

const composablesList: {name: string; description: string}[] = [
  {
    name: 'useBreadcrumb',
    description: 'A global breadcrumb system to pair with the BBreadcrumb component'
  },
  {
    name: 'useColorMode',
    description: 'Implement a color scheme to reactively use light/dark or other color modes. Light and dark themes are included by default, but you can create more by reviewing the usage on the Bootstrap v5 documentation (Color Modes)'
  },
  {
    name: 'useModal',
    description: 'Conveniently hide or show modals programmatically from anywhere in the app',
  },
  {
    name: 'useModalController',
    description: 'Hide modals from anywhere in the app, or close all modals from one source using this utility',
  },
  {
    name: 'useToast',
    description: 'Conveniently orchestrate a push notification system by showing or hiding Toasts with our useToast composable system',
  }
]

const computedComposablesList = computed(() =>
  [...composablesList]
    .map((el) => ({
      name: el.name,
      description: el.description,
      route: routeLocation(el.name),
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
)
</script>
