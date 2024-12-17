import chalk from "chalk";


 const promptSchemaMain = [
    {
        name:"select",
        description:chalk.yellow.bold( "Escolha a ferramenta (1 - QrCode ou (2 - para Password"),
        pattern: /^[1-2]+$/,
        message:chalk.red.italic("Escolha entre 1 e 2"),
        required:true,
    }
]
export default  promptSchemaMain;
