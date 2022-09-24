module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-recess-order",
  ],
  overrides: [
    {
      "files": [
        "**/*.{vue,html}"
      ],
      "customSyntax": "postcss-html"
    },
    {
      "files": [
        "src/**/*.scss"
      ],
      "customSyntax": "postcss-scss"
    },
    {
      "files": [
        "src/**/*.less"
      ],
      "customSyntax": "postcss-less"
    },
    {
      "files": [
        "src/**/*.vue"
      ],
      "customSyntax": "postcss-html"
    }
  ],
  rules: {}
}

// {
//   "extends": [
//     "stylelint-config-standard",
//     "stylelint-config-standard-scss",
//     "stylelint-config-recess-order"
//   ],
//   "overrides": [
//     {
//       "files": [
//         "src/**/*.scss"
//       ],
//       "customSyntax": "postcss-scss"
//     },
//     {
//       "files": [
//         "src/**/*.less"
//       ],
//       "customSyntax": "postcss-less"
//     },
//     {
//       "files": [
//         "src/**/*.vue"
//       ],
//       "customSyntax": "postcss-html"
//     }
//   ]
// }
