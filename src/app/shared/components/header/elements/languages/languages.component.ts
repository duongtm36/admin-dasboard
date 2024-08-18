import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavService } from '../../../../services/nav.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  public language: boolean = false;

  public languages: any[] = [
    {
      language: 'Vietnamese',
      code: 'vi',
      type: 'VN',
      icon: 'vn'
    },{
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  },]

  public selectedLanguage: any =  {
    language: 'Vietnamese',
    code: 'vi',
    type: 'VN',
    icon: 'vn'
  }

  constructor(public navServices: NavService, private translate: TranslateService) { }
  // 
  ngOnInit() {
  }

  changeLanguage(lang) {
    this.translate.use(lang.code)
    this.selectedLanguage = lang;
  }

}
