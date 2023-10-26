# GUIDELINE

## 1. Instalasi

```
npm install
```

## 2. Disarankan

- install vscode extension ```dsznajder.es7-react-js-snippets```

## 3. Struktur Folder

### Group by Feature

A more reasonable solution is to organise files by feature. Files related to a feature should be placed together. And test files should stay close to the source files.
[[Referensi](https://www.freecodecamp.org/news/how-to-structure-your-project-and-manage-static-resources-in-react-native-6f4cfc947d92/)]

Contoh:
```
index.js
App.js
ios/
android/
src
  screens
    login
      LoginScreen.js
      LoginNavigator.js
    onboarding
      OnboardingNavigator    
      welcome 
        WelcomeScreen.js
      term
        TermScreen.js
      notification
        NotificationScreen.js
    main
      MainNavigator.js
      news
        NewsScreen.js
      profile
        ProfileScreen.js
      search
        SearchScreen.js
  library
    package.json
    components
      ImageButton.js
      RoundImage.js
    utils
      moveToBottom.js
      safeArea.js
    networking
      API.js
      Auth.js
  res
    package.json
    strings.js
    colors.js
    palette.js
    fonts.js
    images.js
    images
      logo@2x.png
      logo@3x.png
      button@2x.png
      button@3x.png
scripts
  images.js
  clear.js
```

## 4. Penulisan Komponen

Penulisan komponen diseragamkan menggunakan ```function``` dan menggunkan ekstensi file ```.js```.