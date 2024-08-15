# -*- coding: utf-8 -*-
# from odoo import http


# class EstateModule(http.Controller):
#     @http.route('/estate_module/estate_module', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/estate_module/estate_module/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('estate_module.listing', {
#             'root': '/estate_module/estate_module',
#             'objects': http.request.env['estate_module.estate_module'].search([]),
#         })

#     @http.route('/estate_module/estate_module/objects/<model("estate_module.estate_module"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('estate_module.object', {
#             'object': obj
#         })

