<script setup lang="ts">
const locales = useLocales()
const locale = useLocale()
const date = useLocaleDate(new Date('2016-10-26'))

const color = useColor()
</script>

<template>
  <div>
    <h1>Nuxt生日</h1>
    <p>{{ date }}</p>
    <p>当前颜色 {{ color }}</p>
    <label for="locale-chooser">预览不同的语言环境</label>
    <select id="locale-chooser" v-model="locale">
      <option v-for="locale of locales" :key="locale" :value="locale">
        {{ locale }}
      </option>
    </select>
  </div>
</template>
