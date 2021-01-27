import handlebars from 'handlebars';
import fs from 'fs';

interface ITemplateVariable{
  [key: string]: string | number;
}

interface IParseMailtemplate{
  file: string,
  variables: ITemplateVariable
}

export default class HandlebarsMailTemplate{
  public async parse({file, variables}: IParseMailtemplate): Promise<string>{
    const templateFileContent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });

    const parseTemplate = handlebars.compile(templateFileContent);

    return parseTemplate(variables);
  }
}
