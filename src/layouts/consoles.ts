import { basename, dirname, sep } from 'path'

export const errors = (error) => {
    console.log('Error occurred while running the app: ' + error)
}

export const launch = (environment) => {
    console.log('Bot has been started in ' + environment + ' environment')
}

export const wrongEnv = () => {
    console.log("Bot can't be started due to wrong environment!")
}

export const module = (filename = __filename) => {
    const modules =
        dirname(filename).split(sep).pop() + '/' + basename(filename, '.js')
    console.log('The module ' + modules + ' has been loaded...')
}
