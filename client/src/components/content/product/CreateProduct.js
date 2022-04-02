import React, { useContext, useState } from 'react';
import axios from 'axios';
import Banner from '../Banner';
import { Link } from 'react-router-dom';

import { GlobalState } from '../../.././GlobalState';

function CreateProduct() {
    const state = useContext(GlobalState);

    const [token] = state.token;

    // Get list products
    const [products, setProducts] = state.productsAPI.products;
    // Get product to change
    const [product, setProduct] = useState({});
    // Get list categories
    const [categories] = state.categoriesAPI.categories;
    // Check admin
    const [isAdmin] = state.usersAPI.isAdmin;
    // Type button (Create || Update || Delete)
    const [typeBtn, setTypeBtn] = useState('Create');
    // Type is option or default
    const [option, setOption] = useState(false);
    // Set is selected image
    const [images, setImages] = useState(false);
    // Product update val
    const [update, setUpdate] = useState({});

    const [currentPage, setCurrentPage] = useState('page1');
    const [page, setPage] = useState(1);
    const handleUpload = async (e) => {
        e.preventDefault();
        try {
            if (!isAdmin) {
                return alert("You're not an admin");
            }

            const file = e.target.files[0];

            if (!file) {
                return alert('File not exist');
            }

            if (file.size > 1024 * 1024) {
                return alert('File too large');
            }

            if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
                return alert('File format is incorrect');
            }

            let formData = new FormData();
            formData.append('file', file);

            const res = await axios.post('/api/upload', formData, {
                headers: { 'content-type': 'multipart/form-data', Authorization: token }
            });

            if (update) {
                setImages(res.data);
                setUpdate({ ...update, image: res.data });
            } else {
                setImages(res.data);
            }
            // console.log(res);
        } catch (err) {
            alert(err.response.data.msg);
        }
    }

    const handleDelte = async () => {
        try {
            if (!isAdmin) {
                return alert("You're not an admin");
            }
            if (update) {
                await axios.post('/api/destroy', { public_id: update.image.public_id }, {
                    headers: { Authorization: token }
                });

                setImages(false);
            } else {
                await axios.post('/api/destroy', { public_id: images.public_id }, {
                    headers: { Authorization: token }
                });

                setImages(false);
            }
        } catch (err) {
            alert(err.response.data.msg);
        }
    }

    const handleChangeInput = e => {
        if (typeof update._id !== 'undefined') {
            const { name, value } = e.target;
            setUpdate({ ...update, [name]: value });
        } else {
            const { name, value } = e.target;
            setProduct({ ...product, [name]: value });
        }

        // console.log(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (typeof update._id !== 'undefined') {
            let src = '/api/products/' + update._id;

            try {
                await axios.put(src,
                    {
                        product_id: update.product_id,
                        title: update.title,
                        price: update.price,
                        sale: update.sale,
                        image: update.image,
                        category: update.category
                    }
                )


                let arr = [];
                products.forEach(item => {
                    if (item._id === update._id) {
                        arr.push(update);
                    } else {
                        arr.push(item);
                    }
                });
                setProducts(arr);

                alert('Update success');
                setUpdate({});
                setImages(false);
                setOption(false);
                setTypeBtn('Create');


            } catch (err) {
                alert(err.response.data.msg);
            }
        } else {
            try {
                if (!isAdmin) {
                    return alert("You're not an admin'");
                }

                if (!images) {
                    return alert("No images found");
                }

                await axios.post('/api/products', { ...product, image: images }, {
                    headers: { Authorization: token }
                });

                setImages(false);

                alert('Created product');
                window.location.href = "/create_product";

                // console.log(product);
            } catch (err) {
                alert(err.response.data.msg);
            }
        }
    }



    const styleUpload = {
        display: images ? "block" : "none"
    }

    const DeleteProduct = async () => {
        try {
            if (window.confirm('Are you sure you want to delete?')) {
                if (!isAdmin) {
                    return alert("You're not an admin'");
                }

                let src = '/api/products/' + update._id;
                await axios.delete(src);
                alert('Deleted product');
                // window.location.href="/create_product";
                let arr = [];
                products.forEach(item => {
                    if (item._id !== update._id) {
                        arr.push(item);
                    }
                });
                setProducts(arr);

                setUpdate({});
                setImages(false);
                setOption(false);
                setTypeBtn('Create');
            }
        } catch (err) {
            alert(err.response.data.msg);
        }
    }

    const TableData = () => {
        let showArr = getListPaging(products, page);
        return (
            <>
                <table className="table">
                    <tbody>
                        <tr>
                            <th className="t-head">No</th>
                            <th className="t-head">ID</th>
                            <th className="t-head">Name</th>
                            <th className="t-head">Title</th>
                            <th className="t-head">Price</th>
                            <th className="t-head">Sale</th>
                            <th className="t-head">Image</th>
                            <th className="t-head">Category</th>
                            <th className="t-head"></th>
                        </tr>
                        {
                            showArr.map((item, index) => (
                                categories.map(cate => (
                                    (cate._id === item.category) ?
                                        (
                                            <tr>
                                                <td className="t-data">{(page - 1)*10 + index + 1}</td>
                                                {
                                                    (update._id === item._id) ?
                                                        (
                                                            <td className="t-data"><Link to={`/product/${item._id}`}><b style={{ color: 'red' }}>{item._id}</b></Link></td>
                                                        ) :
                                                        (
                                                            <td className="t-data"><Link to={`/product/${item._id}`}>{item._id}</Link></td>
                                                        )
                                                }
                                                <td className="t-data">{item.product_id}</td>
                                                <td className="t-data">{item.title}</td>
                                                <td className="t-data">{item.price}</td>
                                                <td className="t-data">{item.sale}%</td>
                                                <td className="t-data"><img style={{ height: '120px', width: '100px' }} src={item.image.url} alt="Product"></img></td>
                                                <td className="t-data">{cate.name}</td>
                                                <td className="t-data"><button onClick={() => { setOption(true); setTypeBtn('Update'); setUpdate(item); setImages(item.image); }} className="btn-nomal">Option</button></td>
                                            </tr>
                                        ) :

                                        (
                                            <></>
                                        )
                                ))

                            ))
                        }
                    </tbody>
                </table>
                {
                    Paging(products)
                }
            </>
        )
    }

    // Func render paging
    const Paging = (data) => {
        if (data.length === 0 || data.length === 1) {
            return (
                <div className="page_number">
                    <div className="number__paging">1</div>
                </div>
            )
        } else {
            // get count page
            let pages = calPaging(data.length);
            return (
                <div className="page_number">
                    <div className="number__paging">«</div>
                    {
                        pages.map((page, index) => (
                            <div
                                // set current page and set page
                                onClick={() => { setCurrentPage(page); setPage(index + 1)}}
                                style={(currentPage === page) ? { backgroundColor: 'rgb(3,148,69)' } : {}}
                                className="number__paging"
                                key={page}
                            >{index + 1}
                            </div>
                        ))
                    }
                    <div className="number__paging">»</div>
                </div>
            )
        }
    }

    // Func count page (count row data in table)
    const calPaging = (length) => {
        let arr = [];

        // Cal num of page
        let numberPaging = Math.ceil(length / 10);
        for (let i = 0; i < numberPaging; i++) {
            let num = i + 1;
            let pageNum = "page" + num;
            arr.push(pageNum);
        }

        // Return lst arr page. Ex: [page1, page2, page3];
        return arr;
    }

    // Func get list data per page
    const getListPaging = (lst, page) => {
        const arr = [];

        lst.forEach((item, index) => {
            // if index of item is in this page => push item to arr and return
            if ((Math.floor(index / 10) + 1) === page) {
                arr.push(item);
            }
            
        });
        return arr;
    }
    return (
        <>
            <Banner link="/" name="Create Product" />
            <div className="mock" style={{ padding: '30 0' }}>
                <div className="mock_row1">
                    <form onSubmit={handleSubmit}>
                        {
                            (typeof update._id !== 'undefined') ?
                                (
                                    <>
                                        <div className="mock__input">
                                            <label htmlFor="product_id">Name: </label>
                                            <input
                                                className="field__input"
                                                type="text"
                                                name="product_id"
                                                id="product_id"
                                                value={update.product_id}
                                                onChange={handleChangeInput}
                                                required></input>
                                        </div>
                                        <div className="mock__input">
                                            <label htmlFor="title">Title: </label>
                                            <input
                                                className="field__input"
                                                type="text"
                                                name="title"
                                                id="title"
                                                value={update.title}
                                                onChange={handleChangeInput}
                                                required></input>
                                        </div>
                                        <div className="mock__input">
                                            <label htmlFor="price">Price: </label>
                                            <input
                                                className="field__input"
                                                type="text"
                                                name="price"
                                                id="price"
                                                value={update.price}
                                                onChange={handleChangeInput}
                                                required></input>
                                        </div>
                                        <div className="mock__input">
                                            <label htmlFor="sale">Sale:</label>
                                            <input
                                                className="field__input"
                                                type="text"
                                                name="sale"
                                                id="sale"
                                                value={update.sale}
                                                onChange={handleChangeInput}></input>
                                        </div>
                                        {
                                            categories.map(cateF => (
                                                (cateF._id === update.category) ?
                                                    (
                                                        <div className="mock__input">
                                                            <label>Category:</label>
                                                            <select id="category" name="category" value={product.category} onChange={handleChangeInput} required>
                                                                <option value="">{cateF.name}</option>
                                                                {
                                                                    categories.map(cate => (
                                                                        (cate._id !== update.category) ?
                                                                            (
                                                                                <option value={cate._id} key={cate._id}>{cate.name}</option>
                                                                            ) :
                                                                            (
                                                                                <></>
                                                                            )
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                    ) :
                                                    (
                                                        <></>
                                                    )
                                            ))
                                        }


                                        <div className="upload">
                                            <input type="file" name="file" id="file_up" onChange={handleUpload} />
                                            <div id="file_img" style={styleUpload}>
                                                <img src={update.image.url} alt="" />
                                                <span onClick={() => { handleDelte(); }}>X</span>
                                            </div>
                                        </div>
                                    </>
                                ) :
                                (
                                    <>
                                        <div className="mock__input">
                                            <label htmlFor="product_id">Name: </label>
                                            <input
                                                className="field__input"
                                                type="text"
                                                name="product_id"
                                                id="product_id"
                                                value={product.product_id}
                                                onChange={handleChangeInput}
                                                required></input>
                                        </div>
                                        <div className="mock__input">
                                            <label htmlFor="title">Title: </label>
                                            <input
                                                className="field__input"
                                                type="text"
                                                name="title"
                                                id="title"
                                                value={product.title}
                                                onChange={handleChangeInput}
                                                required></input>
                                        </div>
                                        <div className="mock__input">
                                            <label htmlFor="price">Price: </label>
                                            <input
                                                className="field__input"
                                                type="text"
                                                name="price"
                                                id="price"
                                                value={product.price}
                                                onChange={handleChangeInput}
                                                required></input>
                                        </div>
                                        <div className="mock__input">
                                            <label htmlFor="sale">Sale:</label>
                                            <input
                                                className="field__input"
                                                type="text"
                                                name="sale"
                                                id="sale"
                                                value={product.sale}
                                                onChange={handleChangeInput}></input>
                                        </div>
                                        <div className="mock__input">
                                            <label>Category:</label>
                                            <select name="category" value={product.category} onChange={handleChangeInput}>
                                                <option value="">--Select category--</option>
                                                {
                                                    categories.map(cate => (
                                                        <option value={cate._id} key={cate._id}>{cate.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="upload">
                                            <input type="file" name="file" id="file_up" onChange={handleUpload} />
                                            <div id="file_img" style={styleUpload}>
                                                <img src={images ? images.url : ''} alt="" />
                                                <span onClick={() => { handleDelte(); }}>X</span>
                                            </div>
                                        </div>
                                    </>
                                )
                        }

                        <div className="mock__input">
                            {
                                (option) ?
                                    (
                                        <>
                                            <button className="btn-nomal">{typeBtn}</button>
                                            <a
                                                href="#!"
                                                className=""
                                                onClick={DeleteProduct}
                                                style={{ marginLeft: '15px', backgroundColor: 'red', padding: '5px', textDecoration: 'none' }}
                                            >Delete</a>
                                            <button
                                                onClick={() => { setOption(false); setTypeBtn('Create'); setUpdate({}); setImages(false); }}
                                                style={{ marginLeft: '25px', borderRadius: '50px', width: '35px' }}
                                                className="btn-dangers">X</button>
                                        </>
                                    ) :
                                    (
                                        <button className="btn-nomal">{typeBtn}</button>
                                    )
                            }
                        </div>
                    </form>
                </div>
                <div className="mock_row2" >
                    {
                        TableData()
                    }
                </div>
            </div>
        </>
    );
}

export default CreateProduct;