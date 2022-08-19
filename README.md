### Typescript
Após iniciar o projeto com minimum bare flow (expo init nome-do-projeto), adicionar ao projeto o arquivo tsconfig.json vazio. Ao iniciar o Expo ele vai instalar as dependências necessárias.

### Iniciar Expo
expo start

### Instalar styled components
yarn add styled-components
yarn add @types/styled-components-react-native -D

### Fonts instaladas 
fonte: fonts.google.com
expo install expo-font @expo-google-fonts/poppins
Splash usado enquanto as fontes carregam 
expo install expo-app-loading

### Proporções react native
react-native-responsive-fontsize
yarn add react-native-responsive-fontsize

## Utilizando icones
@expo/vector-icons
Acessar: icons.expo.fyi

## Verificar notch de iphones
yarn add react-native-iphone-x-helper 


### Observacao
TODO se apresentar:

Comportamento:
- No emulador o botao ao abrir o modal nao funciona*
usar a react native gesture handler.
Solução:
- No styles do CategorySelect alterar o Container de View para GestureHandlerRootView (react-native-gesture-handler) importado como o Feather por exemplo.

### Utilizando React hook form
yarn add react-hook-form