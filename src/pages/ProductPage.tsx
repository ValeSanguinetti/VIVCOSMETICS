import { useParams } from "react-router-dom";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

import ProductGallery from "../components/products/ProductGallery";
import ProductLoading from "../components/products/ProductLoading";
import ProductNotFound from "../components/products/ProductNotFound";
import ProductInfo from "../components/products/ProductInfo";
import { useCart } from "../context/CartContext";
import useProductDetail from "../hooks/useProductDetail";

const ProductPage = () => {

    const { slug } =
        useParams<{ slug: string }>();
const { addToCart } = useCart();

    // =====================================================
    // LÓGICA DEL PRODUCTO
    // =====================================================

    const {
        product,
        loading,
        error,

        selectedVariant,
        handleVariantChange,
        handleClearVariant,

        images,
        mainImage,
        selectedImage,
        setSelectedImage,
        imageVersion,
        getImageUrl,

        currentStock,
        hasStock,

        quantity,
        maxQuantity,
        updateQuantity,

        openAccordion,
        toggleAccordion,
    } = useProductDetail(slug);

    // =====================================================
    // LOADING
    // =====================================================

    if (loading) {
        return <ProductLoading />;
    }

    // =====================================================
    // ERROR
    // =====================================================

    if (error || !product) {
        return (
            <ProductNotFound
                message={error || undefined}
            />
        );
    }

    // =====================================================
    // RENDER
    // =====================================================
const handleAddToCart = async () => {
    try {
        await addToCart(
            product.id,
            selectedVariant?.id ?? null,
            quantity
        );
    } catch (error) {
        console.error(
            "Error al agregar el producto al carrito:",
            error
        );
    }
};
    return (
        <main className="min-h-screen bg-[#131313] text-[#e2e2e2] pt-32 pb-32">

            <Header />

            <div className="max-w-[1280px] mx-auto px-5 md:px-20">

                {/* PRODUCTO */}

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">

                    {/* GALERÍA */}

                    <ProductGallery
                        product={product}
                        images={images}
                        mainImage={mainImage}
                        selectedImage={selectedImage}
                        selectedVariant={
                            selectedVariant
                        }
                        imageVersion={
                            imageVersion
                        }
                        getImageUrl={
                            getImageUrl
                        }
                        setSelectedImage={
                            setSelectedImage
                        }
                    />

                    {/* INFORMACIÓN */}

                  <ProductInfo
    product={product}
    selectedVariant={selectedVariant}
    currentStock={currentStock}
    hasStock={hasStock}
    quantity={quantity}
    maxQuantity={maxQuantity}
    openAccordion={openAccordion}
    onVariantChange={handleVariantChange}
    onClearVariant={handleClearVariant}
    updateQuantity={updateQuantity}
    toggleAccordion={toggleAccordion}
    onAddToCart={handleAddToCart}
/>

                </div>


            </div>

            <Footer />

        </main>
    );
};

export default ProductPage;