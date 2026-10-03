The core brand object. Use it anywhere a dish is listed — print menu, website, ordering app.

```jsx
<DishEntry number={13} name="Pho" allergens={[4,6]} tone="onDark" photo="assets/dishes/pho.png"
  description="Vývar, rýžové nudle, jarni cibulka, kodiandr, červená cibule, chilli, sójové klíčky, citron"
  variants={[{label:'s kuřecím masem',price:125},{label:'s tofu',price:115}]} />
```

Alternate `photoSide` down a column so photos zig-zag, exactly like the printed pages. Photos are cut-out plates with a drop shadow, never boxed.
