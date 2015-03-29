import Markdown from './src/Markdown';

var filename = 'C:\\Users\\Asus\\Documents\\Breaking Waves (Book)\\Chapters\I.md';

co( function * () {
    var markdown = yield new Markdown().parse( filename );

} );
