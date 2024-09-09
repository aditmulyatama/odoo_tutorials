# -*- coding: utf-8 -*-
# from odoo import http


# class DashboardTutorial(http.Controller):
#     @http.route('/dashboard_tutorial/dashboard_tutorial', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/dashboard_tutorial/dashboard_tutorial/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('dashboard_tutorial.listing', {
#             'root': '/dashboard_tutorial/dashboard_tutorial',
#             'objects': http.request.env['dashboard_tutorial.dashboard_tutorial'].search([]),
#         })

#     @http.route('/dashboard_tutorial/dashboard_tutorial/objects/<model("dashboard_tutorial.dashboard_tutorial"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('dashboard_tutorial.object', {
#             'object': obj
#         })

