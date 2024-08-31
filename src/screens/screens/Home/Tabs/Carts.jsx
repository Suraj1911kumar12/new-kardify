import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainTemp from '../../../../components/Tempalate/MainTemp';
import HomeHeader from '../../../../components/Headers/HomeHeader';
import Icon from 'react-native-vector-icons/AntDesign';

import OrderStatusLine from '../../../../UiComp/StatusLine/OrderStatusLine';
import {Color} from '../../../../utils/display/Color';
import {SCREEN_HEIGHT} from '../../../../utils/display/Size';
import CustomButton from '../../../../components/Buttons/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {apis} from '../../../../utils/Apis/api';
import ScreenNames from '../../../../utils/ScrRoutes/Screens';

const Carts = () => {
  const [loading, setLoading] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const data = [
    {
      id: 74,
      user_id: 21,
      dealer_id: null,
      product_id: 38,
      combination_id: null,
      quantity: 2,
      createdAt: '2024-08-24T11:03:18.000Z',
      updatedAt: '2024-08-24T11:03:18.000Z',
      deletedAt: null,
      product: {
        id: 38,
        product_name: '‎AMT Suspension Buffers- Small',
        product_desc:
          '<ul><li> Easy fitment &amp; retention, Can be easily fitted without any tools or removing any suspension parts</li><li> Restores Car Height by 3-6 cms , Increasing Cornering Stability</li><li> Reduces Rolling-Pitching in Hatchbacks, SUVs and MUVs</li><li> Reduce severe road jerks in large potholes and increases durability.</li></ul><p> </p><p><strong> Product Specifications:</strong></p><p> Sizes- D</p><p> Weight: 384 gm</p><p> Material: Rubber</p><p> Brand: Imported</p>',
        product_brand_id: 5,
        category_id: 6,
        sub_category_id: 5,
        super_sub_category_id: 8,
        maximum_order: null,
        default_price: 2450,
        stock: 3,
        status: true,
        discount_type: 'amount',
        discount: 250,
        is_offer_avl: null,
        offer_discount: null,
        offer_discount_type: null,
        offer_start_date: null,
        offer_end_date: null,
        tax_type: 'percent',
        tax_rate: 28,
        product_type: 'general',
        car_brand_id: null,
        car_model_id: null,
        start_year: null,
        end_year: null,
        has_exchange_policy: null,
        exchange_policy: 'No exchange',
        has_cancellation_policy: null,
        cancellation_policy: 'Cancellation before shipping',
        quantity: '2',
        has_warranty: null,
        warranty: '00',
        weight: 0.384,
        is_top_selling: false,
        createdAt: '2024-05-03T07:25:59.000Z',
        updatedAt: '2024-05-03T07:25:59.000Z',
        deletedAt: null,
        images: [
          {
            id: 194,
            product_id: 38,
            image_url: '/uploads/products/1714721159347.png',
            status: true,
            createdAt: '2024-05-03T07:25:59.000Z',
            updatedAt: '2024-05-03T07:25:59.000Z',
            deletedAt: null,
          },
          {
            id: 193,
            product_id: 38,
            image_url: '/uploads/products/1714721159335.png',
            status: true,
            createdAt: '2024-05-03T07:25:59.000Z',
            updatedAt: '2024-05-03T07:25:59.000Z',
            deletedAt: null,
          },
          {
            id: 192,
            product_id: 38,
            image_url: '/uploads/products/1714721159323.png',
            status: true,
            createdAt: '2024-05-03T07:25:59.000Z',
            updatedAt: '2024-05-03T07:25:59.000Z',
            deletedAt: null,
          },
        ],
        alloy_car_make_model_associations: [],
        product_alloy_wheel: null,
        product_attributes_associations: [],
      },
      images: [
        {
          id: 192,
          product_id: 38,
          image_url: '/uploads/products/1714721159323.png',
        },
        {
          id: 193,
          product_id: 38,
          image_url: '/uploads/products/1714721159335.png',
        },
        {
          id: 194,
          product_id: 38,
          image_url: '/uploads/products/1714721159347.png',
        },
      ],
    },
  ];
  useEffect(() => {
    setCartItems(data);
  }, []);
  const CustomBtn = ({id, combId, quantity}) => (
    <View style={styles.customBtnContainer}>
      <TouchableOpacity
        // onPress={() => decreseQuantity(id, combId)}
        style={styles.btn}>
        <Text>-</Text>
      </TouchableOpacity>
      <View style={[styles.btn, {backgroundColor: Color.white}]}>
        <Text style={{color: Color.black}}>{quantity}</Text>
      </View>
      <TouchableOpacity
        // onPress={() => increseQuantity(id, combId)}
        style={styles.btn}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
  const LoadingSkeleton = () => {
    return (
      <View style={styles.skeletonContainer}>
        {[...Array(3)].map((_, index) => (
          <View key={index} style={styles.skeletonItem}>
            <View style={styles.skeletonImage} />
            <View style={styles.skeletonTextContainer}>
              <View style={styles.skeletonLine} />
              <View style={styles.skeletonLineShort} />
            </View>
          </View>
        ))}
      </View>
    );
  };
  const renderItem = data => {
    const item = data?.item;
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          // onPress={() => dispatch(removeProduct(item))}
          style={{position: 'absolute', top: 5, right: 5}}>
          <Icon name="close" size={20} color={Color.white} />
        </TouchableOpacity>

        <View style={styles.itemImageContainer}>
          <Image
            source={{uri: apis.baseImgUrl + item?.images[0]?.image_url}}
            style={styles.itemImage}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.itemTitleContainer}>
          <Text style={styles.itemTitle}>{item?.product?.product_name}</Text>
          <Text style={{color: Color.white}}> {item?.product?.rating}</Text>
          <CustomBtn
            id={item?.product_id}
            quantity={item?.quantity}
            combId={item?.combination_id}
          />
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'center',
              gap: 10,
              alignItems: 'center',
            }}>
            <Text style={{color: Color.grey, fontSize: 20}}>
              ₹
              {item?.product?.default_price -
                (item?.product?.default_price * item?.product?.discount) / 100}
            </Text>
            {item?.product?.discount && (
              <Text
                style={{
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid',
                  color: Color.grey,
                  fontSize: 13,
                }}>
                M.R.P : ₹ {item?.product?.default_price}
              </Text>
            )}
          </View>
        </View>
      </View>
    );
  };

  const navigation = useNavigation();
  return (
    <MainTemp>
      <HomeHeader title={'Carts'} />
      <View style={{flex: 1}}>
        <OrderStatusLine status="Address" />
        <View style={styles.address}>
          <Text style={styles.addressText}>Deliver to : Suraj</Text>
          <TouchableOpacity style={styles.addressChange}>
            <Text style={styles.addressTextChange}>Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false}>
          {loading ? (
            <LoadingSkeleton />
          ) : cartItems.length === 0 ? (
            <View style={styles.emptyCartContainer}>
              <Text style={styles.emptyCartText}>No cart data available</Text>
            </View>
          ) : (
            <>
              <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={item => item.id.toLocaleString()}
                numColumns={1} // Display 2 items per row
                contentContainerStyle={{
                  padding: 10,
                  gap: 2,
                  marginBottom: 50,
                }}
              />
              {/* <PriceDetails /> */}
              <CustomButton
                title="Proceed to checkout "
                onPressButton={() => navigation.navigate(ScreenNames.checkout)}
              />
            </>
          )}
        </ScrollView>
      </View>
    </MainTemp>
  );
};

export default Carts;

const styles = StyleSheet.create({
  address: {
    flex: 1,
    backgroundColor: Color.black,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    maxHeight: 80,
  },
  itemImage: {
    height: 80,
    width: 80,
    borderRadius: 20,
  },
  addressText: {
    flex: 3,
    color: Color.white,
  },
  addressChange: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addressTextChange: {
    color: Color.red,
    lineHeight: 22,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: Color.lightBlack,
    paddingVertical: 25,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 5,
    marginTop: 10,
    position: 'relative',
    gap: 5,
    maxHeight: 344,
  },
  itemTitle: {
    color: Color.white,
    lineHeight: 16,
    fontWeight: '700',
    fontSize: 12,
  },
  itemImageContainer: {
    flex: 1,
    gap: 5,
  },
  itemTitleContainer: {
    flex: 2,
    gap: 4,
  },
  customBtnContainer: {
    flexDirection: 'row',
    width: 75,
    height: 25,
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 5,
  },
  btn: {
    width: 25,
    backgroundColor: Color.btnBlack,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    color: Color.white,
  },

  priceContainer: {
    marginHorizontal: 10,
    backgroundColor: Color.lightBlack,
    flex: 1,
    borderColor: Color.black,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 50,
    gap: 10,
  },
  priceText: {
    fontSize: 16,
    color: Color.white,
  },
  hr: {
    height: 1,
    backgroundColor: Color.black,
    width: '100%',
  },
  priceData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  pData: {
    flex: 1,
    gap: 10,
    color: Color.white,
  },
  text: {
    color: Color.white,
  },
  skeletonContainer: {
    padding: 10,
  },
  skeletonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: Color.lightBlack,
    borderRadius: 10,
    padding: 10,
  },
  skeletonImage: {
    width: 80,
    height: 80,
    backgroundColor: Color.grey,
    borderRadius: 10,
  },
  skeletonTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  skeletonLine: {
    width: '80%',
    height: 10,
    backgroundColor: Color.grey,
    borderRadius: 5,
    marginBottom: 5,
  },
  skeletonLineShort: {
    width: '60%',
    height: 10,
    backgroundColor: Color.grey,
    borderRadius: 5,
  },
  emptyCartContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: SCREEN_HEIGHT / 2,
  },
  emptyCartText: {
    color: Color.white,
    fontSize: 18,
  },
});
