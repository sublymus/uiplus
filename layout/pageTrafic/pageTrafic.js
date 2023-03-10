import BaseComponent, { Components } from "../../ts_lib/baseComponent/baseComponent.js";
export default class PageTrafic extends BaseComponent {

    constructor(data1) {
        super({
            childrens: [],
        })
        const data = {
            //info perso
            name: 'Kouassi Noga Wilfred Lemuel',
            phone: '+7(999)862-74-41', 
            email:'a@gmail.com',
            status: 'property', 

            // home
            building: 'Sublymus Building E45 ; ',
            city: 'Rostov on don',
            room: '453', 
            etage: '12', 
            door: '3', 

            //profile
            bainner:'img/download.jpeg',
            imgProfile: '/img/infographic',
            message:'I\' the best '
        }

        const { _, viewName, $, $All } = this.mvc;

        this.view = _('div', viewName,
            _('div', 'filter-bar',
                _('div', 'filter-container',
                    _('div@filter=Tous', 'all',
                        _('div', 'label', 'Tous'),
                        _('div', 'count', '23 066')
                    ),
                    _('div@filter=organisation', 'organisation',
                        _('div', 'label', 'Organisation'),
                        _('div', 'count', '87')
                    ),
                    _('div@filter=client', 'client',
                        _('div', 'label', 'Client'),
                        _('div', 'count', '22 976')
                    ),
                    _('div@filter=gestion', 'gestion',
                        _('div', 'label', 'Gestion'),
                        _('div', 'count', ' 05')
                    ),
                    _('div@filter=construction', 'construction',
                        _('div', 'label', 'Construction'),
                        _('div', 'count', ' 05')
                    )
                )
            ),
            _('div', 'container',
                _('div', 'list-container',
                    _('ItemList', {
                        itemsData: [data, data, data, data, , data, data, data, data, data, data, data, data, data, data, data, data, data, data, data],
                        class: 'Item',
                        columns: ['date', 'profile', 'status', 'phone']
                    })
                ),
                _('div', 'index-container',

                ),
            ),
            _('InfoBull', {})
        );
        this.controller = {
            ['@filter:click']: (filter, isSelected, e) => {

                if (isSelected) {
                    filter.classList.add('active')
                } else {
                    filter.classList.remove('active')
                }
            },
            [viewName]: (view) => {
                $('.item-list').component.when('selected', item => {
                    $('.info-bull').component.item = item
                    $('.info-bull').className = 'info-bull'
                    $('.info-bull').classList.add('size2')
                    $('.info-bull').style.display = 'block'
                })
                $('.info-bull').classList.add('exite')
                $('.info-bull').style.display = 'none'
            }
        }
    }
}

Components.PageTrafic = PageTrafic;
