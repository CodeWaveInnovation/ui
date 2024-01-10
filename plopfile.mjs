export default function (plop) {

    plop.setHelper('FirstLetterCapital', (str) => { 
        return str.charAt(0).toUpperCase() + str.slice(1);
    })

    plop.setGenerator('Create Component', {
        description: 'Create a new component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your component?: ',
                validate: (value)=> ((/[a-z]/gi).test(value)) ? true : 'name is required'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{name}}/{{name}}.tsx',
                templateFile: 'plop-templates/component.tsx.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{name}}/{{name}}.styles.css',
                templateFile: 'plop-templates/styles.css.hbs'
            },
        ],
    })
}