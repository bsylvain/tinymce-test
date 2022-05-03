import Controller from '@ember/controller';
import 'tinymce';
import 'tinymce/themes/silver';

export default class ApplicationController extends Controller {
  value = 'Text to edit';
}
