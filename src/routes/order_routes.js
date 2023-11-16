const OrderRoutes = require('express').Router();
const OrderController = require('./../controllers/order_controller');


OrderRoutes.get("/", OrderController.createOrder);
OrderRoutes.post("/:userId", OrderController.fetchOrderForUser);
OrderRoutes.put("/updateStatus", OrderController.updateOrderStatus);

module.exports = OrderRoutes;