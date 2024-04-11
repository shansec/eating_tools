const getPageViewWidth = () => {
  return (document.compatMode == 'BackCompat' ? document.body : document.documentElement)
    .clientWidth
}
