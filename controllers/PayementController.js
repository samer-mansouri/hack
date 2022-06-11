const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)


let createPayment = async (req, res) => {
	let { amount } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: 'gbp',
			payment_method_types: ['card'],
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
}


module.exports = {
    createPayment
}