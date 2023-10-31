import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'
import reportWebVitals from './reportWebVitals'
import { AppProvider } from './contexts/app/AppContext'
import './i18n/index'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'
import 'focus-visible/dist/focus-visible'
// import "./styles.scss"
import './styles/styles.css'
import { EditorProvider } from './uibox'

ReactDOM.render(
  <AppProvider>
    <ThemeProvider theme={theme}>
      <EditorProvider>
        <AppContainer />
      </EditorProvider>
    </ThemeProvider>
  </AppProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
