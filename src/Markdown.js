import co from 'co';
import marked from 'marked';
import fs from 'mz/fs';

export default class Markdown {
    constructor ( filename ) {

    }

    parse ( filename ) {
        var tokens = marked.lexer(text, options);

        console.log( filename );

        return this;
    }
}
