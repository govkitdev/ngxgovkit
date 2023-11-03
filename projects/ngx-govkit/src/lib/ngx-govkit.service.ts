import {Inject, Injectable} from '@angular/core';
import {GovkitConfig} from "./interfaces/govkitconfig";
import {GOVKIT_CONFIG_OPTIONS} from "./ngx-govkit.module";
import {UI_FRAMEWORKS} from "./util/constants";

@Injectable({
  providedIn: 'root'
})
export class NgxGovkitService {

  constructor(@Inject(GOVKIT_CONFIG_OPTIONS) private config: GovkitConfig) {
  }

  setGovCss() {
    if (this.checkConfig(this.config)) {
      this.setGovCssByUiFramework(this.config!.uiFramework!);
    }
  }

  private setGovCssByUiFramework(uiFramework: string) {
    switch (uiFramework) {
      case UI_FRAMEWORKS.PRIME_NG_PRIME_FLEX:
        this.setGovCssPrimeNgPrimeFlex();
        break;
      default:
        console.error('UI FRAMEWORK NOT MANAGED IN GOVKIT')
    }
  }

  private setGovCssPrimeNgPrimeFlex() {
    const myCss = '@import url(https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap);.p-breadcrumb,.p-button,.p-component,.p-dropdown-label,body,html{font-family:"Titillium Web",serif!important}.p-accordion .p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus,.p-button,.p-card,.p-dropdown:not(.p-disabled).p-focus,.p-radiobutton .p-radiobutton-box:focus,.p-rating .p-rating-icon:focus,.p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus{box-shadow:none!important}.card-link-text-big,.it-link-cta-icon:hover,.it-link-cta:hover,.p-tag.p-tag-link:hover{cursor:pointer}.p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link{background:#fff!important;color:#5d7083!important;border-bottom:none!important}.p-accordion.header-active-bg .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link,.p-accordion.header-active-bg-hover .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link,.p-accordion.header-active-bg-hover .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link{background:#06c!important;color:#fff!important;border-bottom:none!important}.p-accordion.left-icon-accordion .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link .p-accordion-header-text,.p-accordion.left-icon-accordion .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link .p-accordion-header-text,.p-accordion:not(.left-icon-accordion) .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link,.p-tag.p-tag-link,.p-tieredmenu .p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-text:hover{text-decoration:underline!important}.p-accordion.left-icon-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon:hover,.p-button,.p-tag.p-tag-link:hover{text-decoration:none!important}.p-accordion:not(.left-icon-accordion):not(.header-active-bg-hover) .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link{background:#fff!important;text-decoration:underline!important}.p-accordion .p-accordion-header .p-accordion-header-link,.p-button-outlined,.p-splitbutton.p-button-outlined>.p-button{background:#fff!important;color:#06c!important}.p-accordion .p-accordion-content{padding:.5rem 1.25rem!important}.p-accordion:not(.left-icon-accordion) .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon{float:right!important;right:.5rem!important;position:absolute!important}.p-accordion.left-icon-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon{margin-right:1.5rem!important}.p-button{background:#06c!important;border-color:#06c!important;color:#fff!important;font-weight:700!important;padding:10px 24px!important;font-size:1.1rem!important;white-space:initial!important;border-width:2px!important}.callout-title,.card-link-text{font-weight:700}.p-button:focus{box-shadow:inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075),0 0 0 .25rem rgba(0,102,204,.5)!important}.p-button:hover{background:#0053a5!important}.p-button-outlined:hover,.p-splitbutton.p-button-outlined>.p-button:hover{background:#fff!important;color:#0053a5!important;border-color:#0053a5!important}.p-button .p-badge{color:#0053a5!important;font-size:.8rem!important}.p-button-secondary,.p-splitbutton.p-button-secondary>.p-button{background:#5d7083!important;border-color:#5d7083!important;color:#fff!important}.p-button-secondary:hover,.p-splitbutton.p-button-secondary>.p-button:hover{background:#4b5b6a!important;color:#fff!important;border-color:#4b5b6a!important}.p-button-secondary.p-button-outlined,.p-splitbutton.p-button-secondary.p-button-outlined>.p-button{background:#fff!important;border-color:#5d7083!important;color:#5d7083!important}.p-button-secondary.p-button-outlined:hover,.p-splitbutton.p-button-secondary.p-button-outlined>.p-button:hover{background:#fff!important;border-color:#4b5b6a!important;color:#4b5b6a!important}.p-button-success,.p-splitbutton.p-button-success>.p-button{background:#008055!important;border-color:#008055!important;color:#fff!important}.p-button-success:hover,.p-splitbutton.p-button-success>.p-button:hover{background:#006845!important;color:#fff!important;border-color:#006845!important}.p-button-success.p-button-outlined,.p-splitbutton.p-button-success.p-button-outlined>.p-button{background:#fff!important;border-color:#008055!important;color:#008055!important}.p-button-success.p-button-outlined:hover,.p-splitbutton.p-button-success.p-button-outlined>.p-button:hover{background:#fff!important;border-color:#006845!important;color:#006845!important}.p-button-danger,.p-splitbutton.p-button-danger>.p-button{background:#cc334d!important;border-color:#cc334d!important;color:#fff!important}.p-button-danger:hover,.p-splitbutton.p-button-danger>.p-button:hover{background:#a5293e!important;color:#fff!important;border-color:#a5293e!important}.p-button-danger.p-button-outlined,.p-splitbutton.p-button-danger.p-button-outlined>.p-button{background:#fff!important;border-color:#cc334d!important;color:#cc334d!important}.p-button-danger.p-button-outlined:hover,.p-splitbutton.p-button-danger.p-button-outlined>.p-button:hover{background:#fff!important;border-color:#a5293e!important;color:#a5293e!important}.p-button-warning,.p-splitbutton.p-button-warning>.p-button{background:#995c00!important;border-color:#995c00!important;color:#fff!important}.p-button-warning:hover,.p-splitbutton.p-button-warning>.p-button:hover{background:#7c4b00!important;color:#fff!important;border-color:#7c4b00!important}.p-button-warning.p-button-outlined,.p-splitbutton.p-button-warning.p-button-outlined>.p-button{background:#fff!important;border-color:#995c00!important;color:#995c00!important}.p-button-warning.p-button-outlined:hover,.p-splitbutton.p-button-warning.p-button-outlined>.p-button:hover{background:#fff!important;border-color:#7c4b00!important;color:#7c4b00!important}.p-breadcrumb{background:0 0!important;padding:0!important}.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link .p-menuitem-text{color:#30475f!important;font-weight:600;text-decoration:underline;cursor:pointer}.p-breadcrumb .p-breadcrumb-list li:last-child .p-menuitem-text{font-weight:400!important;text-decoration:none;cursor:text}.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link .p-menuitem-icon{color:#5d7083!important;margin-right:.5rem}.callout{border:2px solid #5d7083;padding:2rem}.callout-content-text{font-size:1.1rem;color:#30475f!important;font-family:Lora,Georgia,serif;line-height:1.555}.callout-title{font-size:1.2rem;color:#30475f;letter-spacing:.06rem;display:flex;align-items:center}.callout.callout-important,.callout.callout-success{border:2px solid #008055;padding:2rem}.callout-evidenza.callout-success .callout-title,.callout.callout-important .callout-title,.callout.callout-success .callout-title{color:#008055}.callout.callout-warning{border:2px solid #995c00;padding:2rem}.callout-evidenza.callout-warning .callout-title,.callout.callout-warning .callout-title{color:#995c00}.callout.callout-danger{border:2px solid #cc334d;padding:2rem}.callout-evidenza.callout-danger .callout-title,.callout.callout-danger .callout-title{color:#cc334d}.callout.callout-note{border:2px solid #06c;padding:2rem}.callout-evidenza.callout-note .callout-title,.callout.callout-note .callout-title{color:#06c}.callout-title i{font-size:1.5rem}.callout-evidenza{border-left:2px solid #5d7083;padding-left:2rem}.callout-evidenza.callout-success{border-left:2px solid #008055}.callout-evidenza.callout-warning{border-left:2px solid #995c00}.callout-evidenza.callout-danger{border-left:2px solid #cc334d}.callout-evidenza.callout-note{border-left:2px solid #06c}.callout-big-text{font-weight:700;font-size:1.111rem}.p-card{font-family:"Titillium Web",serif!important}.card-content-text,.card-signature{font-family:Lora,Georgia,serif!important}.p-card.card-evidenza,.steppers.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link{border-bottom:3px solid #06c!important}.p-card.card-shadow{box-shadow:rgba(0,0,0,.1) 0 2px 20px 0!important}.p-card.base-card .p-card-title{font-size:1.4rem!important;line-height:1.5rem!important;font-weight:700!important;color:#30475f!important}.card-content-text{font-size:1rem!important;line-height:1.2rem!important;color:#1a1a1a!important}.card-link-text,.card-link-text-thin{letter-spacing:.9px;color:#06c;font-size:1rem!important;text-decoration:underline}.card-link-text-big,.card-signature,.card-text-big{font-weight:700!important}.card-title-thin,.it-link-cta{letter-spacing:.9px!important}.card-text-big{font-size:1.55556rem!important;line-height:1.77778rem!important;color:#30475f!important}.card-link-text-big,.p-tabview .p-tabview-nav li .p-tabview-nav-link{font-size:1.125rem!important}.card-link-text-big{line-height:1.4444444444rem!important;color:#06c!important;text-decoration:underline}.it-link,.it-link-cta:hover{text-decoration:underline!important}.card-title-thin{font-size:.777778rem!important;color:#1a1a1a!important;line-height:1rem!important}.card-signature{font-style:italic!important;color:#1a1a1a!important;font-size:.888889rem!important}.p-blockui,.p-carousel-item,.p-chip,.p-dropdown,.p-inputtext,.p-tabview .p-tabview-nav li .p-tabview-nav-link,.p-tag{font-family:"Titillium Web",serif!important}.p-carousel-item{padding:1rem!important}.p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button{background:#06c!important;border-radius:50%!important;width:.5rem!important;height:.5rem!important}.p-carousel .p-carousel-indicators .p-carousel-indicator button{background:#94c4f5!important;border-radius:50%!important;width:.5rem!important;height:.5rem!important}.full-width.p-tabview .p-tabview-nav li,.p-inputtext{width:100%!important}.p-carousel .p-carousel-content .p-carousel-next,.p-carousel .p-carousel-content .p-carousel-prev{width:40px!important;height:40px!important;background:#06c!important;color:#fff!important;border-radius:0!important}.p-carousel .p-carousel-content .p-carousel-next:disabled,.p-carousel .p-carousel-content .p-carousel-prev:disabled,.p-radiobutton-box.p-disabled.p-highlight .p-radiobutton-icon{background:#d8d9da!important}.p-chip{background:#f5f5f5!important;border:1px solid #c5c7c9!important;padding:0 1.75rem!important}.p-chip:hover{background:#30475f!important;border:1px solid #30475f!important}.p-chip .p-chip-text{color:#30475f!important;font-weight:600!important}.p-chip:hover .p-chip-text{color:#fff!important;font-weight:600!important}.p-chip .pi-chip-remove-icon{color:#30475f!important;opacity:.8!important}.p-chip:hover .pi-chip-remove-icon{color:#fff!important;opacity:1!important}.p-chip.chip-success{background:0 0!important;border:1px solid #008055!important}.p-chip.chip-success:hover{background:#008055!important;border:1px solid #008055!important}.p-chip.chip-success .p-chip-text,.p-chip.chip-success .pi-chip-remove-icon{color:#008055!important}.p-chip.chip-warning{background:0 0!important;border:1px solid #995c00!important}.p-chip.chip-warning:hover{background:#995c00!important;border:1px solid #995c00!important}.p-chip.chip-warning .p-chip-text,.p-chip.chip-warning .pi-chip-remove-icon{color:#995c00!important}.p-chip.chip-danger{background:0 0!important;border:1px solid #cc334d!important}.p-chip.chip-danger:hover{background:#cc334d!important;border:1px solid #cc334d!important}.p-chip.chip-danger .p-chip-text,.p-chip.chip-danger .pi-chip-remove-icon{color:#cc334d!important}.p-chip.chip-info{background:0 0!important;border:1px solid #06c!important}.p-chip.chip-info:hover{background:#06c!important;border:1px solid #06c!important}.gov-it-primary,.it-link-cta-icon,.p-chip.chip-info .p-chip-text,.p-chip.chip-info .pi-chip-remove-icon,.p-rating .p-rating-icon.p-rating-icon-active,.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-icon:hover,.p-tieredmenu .p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-icon,.p-tieredmenu .p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-text{color:#06c!important}.p-chip.chip-danger:hover .p-chip-text,.p-chip.chip-danger:hover .pi-chip-remove-icon,.p-chip.chip-info:hover .p-chip-text,.p-chip.chip-info:hover .pi-chip-remove-icon,.p-chip.chip-success:hover .p-chip-text,.p-chip.chip-success:hover .pi-chip-remove-icon,.p-chip.chip-warning:hover .p-chip-text,.p-chip.chip-warning:hover .pi-chip-remove-icon{color:#fff!important}.p-datepicker:not(.p-datepicker-inline) .p-datepicker-header{background:0 0!important}.p-calendar-w-btn .p-datepicker-trigger{background:#fff!important;color:#000!important;border:none!important;border-bottom:1px solid #5b6f82!important;border-radius:0!important;padding-bottom:0!important}.p-badge.p-badge-info,.p-datepicker .p-monthpicker .p-monthpicker-month.p-highlight,.p-datepicker .p-yearpicker .p-yearpicker-year.p-highlight,.p-datepicker table td>span.p-highlight,.p-radiobutton-box.p-highlight .p-radiobutton-icon,.p-tag.p-tag-info{background:#06c!important}.p-inputtext{border:none!important;border-bottom:1px solid #5d7083!important;padding:.88rem .5rem!important;border-radius:0!important;color:#5d7083!important}.p-inputtext:enabled:focus{box-shadow:none!important;color:#1a1a1a!important;border-bottom:1px solid #1a1a1a!important}.p-float-label label{color:#5d7083!important}.p-float-label .p-inputwrapper-filled~label,.p-float-label .p-inputwrapper-focus~label{font-weight:600!important;color:#1a1a1a!important}.p-blockui{background-color:#17334f!important;opacity:.92!important}.p-blockui.dimmer-primary{background-color:#06c!important}.it-link{color:#06c}.it-link-cta{color:#06c!important;text-transform:uppercase!important;font-weight:700!important;font-size:.777778rem!important}:not(.steppers).full-width.p-tabview .p-tabview-nav li .p-tabview-nav-link{display:flex!important;justify-content:center!important}.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link{border-bottom:2px solid #06c!important;border-left:none!important;border-right:none!important;border-top:none!important;color:#06c!important}.steppers.p-tabview .p-tabview-nav,:not(.steppers).p-tabview .p-tabview-nav li:not(.p-highlight) .p-tabview-nav-link:hover{border:none!important}.p-tabview .p-tabview-nav li:not(.p-highlight) .p-tabview-nav-link{color:#30475f!important}.steppers.p-tabview .p-tabview-nav li .p-tabview-nav-link{border-radius:0!important;padding:1.6rem!important;border-left:1px solid #c5c7c9!important}.steppers.p-tabview .p-tabview-nav li:first-child .p-tabview-nav-link{border-left:none!important}.steppers.p-tabview .p-tabview-nav li:not(.p-highlight) .p-tabview-nav-link{border-top:none!important;border-bottom:none!important}.steppers.p-tabview .p-tabview-nav li:not(.p-highlight) .p-tabview-nav-link:hover{border-right:none!important}.marker-box-shadow{box-shadow:0 2px 20px 0 rgba(0,0,0,.1)!important}.p-timeline.p-timeline-vertical .p-timeline-event-connector{background:#036!important}.p-inputswitch .p-inputswitch-slider:before,.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before{background-size:15px 15px!important;background-repeat:no-repeat!important;background-position:center!important}.p-inputswitch .p-inputswitch-slider{width:46px!important;height:18px!important;background:#e6e9f2!important;border-radius:10px!important}.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before{background-color:#06c!important;left:23px!important;transform:translateX(.45rem)!important;background-image:url("assets/svg/check-white.svg")!important;border:2px solid #fff!important}.p-inputswitch .p-inputswitch-slider:before{width:1.8rem!important;height:1.8rem!important;margin-top:-.95rem!important;border-radius:50%!important;left:-.5rem!important;background-color:#5b6f82!important;background-image:url("assets/svg/times-white.svg")!important;border:2px solid #fff!important}.p-inputswitch.p-disabled .p-inputswitch-slider:before{background-color:#b3b8c7!important}.p-badge.p-badge-info.outlined{background:#f5f5f5!important;color:#5d7083!important}.p-dropdown,.p-dropdown-panel .p-dropdown-header{background:#fff!important}.p-dropdown{border-bottom:1px solid #5d7083!important;border-radius:0!important}.p-dropdown .p-inputtext{border-bottom:none!important;color:#1a1a1a!important;font-weight:700!important;padding:.375rem .5rem!important}.p-dropdown-panel .p-dropdown-items .p-dropdown-item{padding:.6rem!important;font-family:"Titillium Web",serif!important}.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight{color:#fff!important;background:#06c!important}.p-dropdown-panel .p-dropdown-items .p-dropdown-item:hover{color:#fff!important;background:#06c!important;cursor:default!important}.p-dropdown.p-disabled{background:#d8d9da!important;opacity:1!important}.p-radiobutton .p-radiobutton-box.p-highlight{border-color:#06c!important;background:#fff!important}.p-radiobutton .p-radiobutton-box.p-disabled.p-highlight{border-color:#d8d9da!important}.p-radiobutton .p-radiobutton-box.p-disabled{border-color:#d8d9da!important;opacity:1!important}.p-radiobutton .p-radiobutton-box{border-color:#5d7083!important}.p-tag{padding-left:1rem!important;padding-right:1rem!important;background:#06c!important}.small-tag.p-tag{font-size:14px!important}.p-tag.p-tag-danger{background:#a5293e!important;color:#fff!important}.p-tag.p-tag-success{background:#006845!important;color:#fff!important}.p-tag.p-tag-warning{background:#995c00!important;color:#fff!important}'
    const style = document.createElement("STYLE");
    style.innerText = myCss;
    document.body.appendChild(style);
  }

  private checkLicense(licenseKey: string | undefined) {
    if (!licenseKey) {
      console.error('No Govkit License Key Provided');
      return false;
    }
    if (licenseKey === 'fe1be73c-6e90-11ee-b962-0242ac120002') {
      return true;
    } else {
      console.error('No Valid Govkit License Key Provided');
      return false;
    }
  }

  private checkConfig(config: GovkitConfig): boolean {
    if (!this.config) {
      console.error('NO GOVKIT CONFIG PROVIDED');
      return false;
    }
    if (!this.checkLicense(config.licenseKey)) {
      return false;
    }
    if (!this.checkUiFramework(config.uiFramework)) {
      return false;
    }
    if (!this.checkDesignSystem(config.designSystem)) {
      return false;
    }
    return true;
  }

  private checkUiFramework(uiFramework: string | undefined) {
    if (!uiFramework) {
      console.error('NO UI FRAMEWORK PROVIDED');
      return false;
    }
    return true;
  }

  private checkDesignSystem(designSystem: string | undefined) {
    if (!designSystem) {
      console.error('NO DESIGN SYSTEM PROVIDED');
      return false;
    }
    return true;
  }
}