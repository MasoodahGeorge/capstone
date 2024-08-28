import { connection as db } from "../config/index.js";

class Products {
    fetchProducts(req, res) {
        try {
            const strQry = `
                SELECT 
                id AS prodID, 
                name AS prodName, 
                description AS prodDescription, 
                price AS amount, 
                category AS Category, 
                image_url AS prodUrl
                FROM products;
            `;
            db.query(strQry, (err, results) => {
                if (err) throw new Error("Issue occurred while retrieving all products.");
                res.json({
                    status: res.statusCode,
                    results,
                });
            });
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message,
            });
        }
    }

    fetchRecentProducts(req, res) {
        try {
            const strQry = `
                SELECT *
                FROM products 
                ORDER BY id DESC
                LIMIT 5;
            `;
            db.query(strQry, (err, results) => {
                if (err) throw new Error(err);
                res.json({
                    status: res.statusCode,
                    results,
                });
            });
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message,
            });
        }
    }

    fetchAProduct(req, res) {
        try {
            const strQry = `
                SELECT 
                id AS prodID, 
                name AS prodName, 
                description AS prodDescription, 
                price AS amount, 
                category AS Category, 
                image_url AS prodUrl
                FROM products
                WHERE id = ?;
            `;
            db.query(strQry, [req.params.id], (err, result) => {
                if (err) throw new Error('Issue occurred while retrieving the desired product');
                res.json({
                    status: res.statusCode,
                    result: result[0],
                });
            });
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message,
            });
        }
    }

    addAProduct(req, res) {
        try {
            let data = req.body;
            const strQry = `
                INSERT INTO products
                SET ?;
            `;
            db.query(strQry, [data], (err) => {
                if (err) throw new Error('Unable to add product');
                res.json({
                    status: res.statusCode,
                    msg: 'Product has been added successfully',
                });
            });
        } catch (e) {
            res.json({
                status: 404,
                err: e.message,
            });
        }
    }

    updateAProduct(req, res) {
        try {
            let data = req.body;
            const strQry = `
                UPDATE products SET ? WHERE id = ?;
            `;
            db.query(strQry, [data, req.params.id], (err) => {
                if (err) throw new Error("Unable to update product");
                res.json({
                    status: res.statusCode,
                    msg: "Product was updated successfully",
                });
            });
        } catch (e) {
            res.json({
                status: 404,
                err: e.message,
            });
        }
    }

    deleteAProduct(req, res) {
        try {
            const strQry = `
                DELETE FROM products WHERE id = ?;
            `;
            db.query(strQry, [req.params.id], (err) => {
                if (err) throw new Error("Unable to delete product");
                res.json({
                    status: res.statusCode,
                    msg: "Product has been removed successfully",
                });
            });
        } catch (e) {
            res.json({
                status: 404,
                err: e.message,
            });
        }
    }
}

const products = new Products();
export { products };
