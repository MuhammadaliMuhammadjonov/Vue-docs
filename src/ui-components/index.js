// Barcha componentlarni globallashtrish
import DangerButton from './DangerButton.vue'
import Input from './Input.vue'
import Loader from './Loader.vue'
// ...

// [ ] massiv ishiga barcha import qilingan componentlar nomi kiritiladi
export default [DangerButton, Input , Loader]
// export default [DangerButton, BlackButton, Box, ...]

/*
    So'ng index.js ni main.js fayilimizda import qilib qoyamiz
    -- import qilishda index.js joylashgan papkaning o'zi import qilinadi index.jsni esa avtomatik topib oladi
*/