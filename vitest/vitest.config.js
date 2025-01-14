import { configDefaults, defineProject } from 'vitest/config'

export default defineProject({
  test: {
    globals: true,
    environmentMatchGlobs: [['src/{demo}/**', 'jsdom']],
    sequence: {
      hooks: 'list'
    },
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html']
    }
  }
})
