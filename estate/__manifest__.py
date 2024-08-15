{
    'name': 'Real Estate',
    'description': 'Manage properties for sale',
    'author': 'Odoo Class',
    'depends': ['base'],
    'license': 'AGPL-3',
    'version': '17.0.0.1.0',
    'website': 'https://www.odoo.yourcompany.com',
    'installable': True,
    'application': True,
    'category': 'Sales/Real Estate',
    'data': [
        'security/ir.model.access.csv',
        'views/estate_menus.xml',
        'views/estate_property_views.xml',
        'views/estate_settings_menu.xml',
        'views/estate_property_type_views.xml',
        'views/estate_property_tag_views.xml',
        'views/estate_property_offer_views.xml',
        'views/res_users_view_form.xml'
    ],
}