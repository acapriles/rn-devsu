import { StyleSheet, View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import { SIZES } from "../commons/constants"


export const ProductsSkeleton = () => {
    const style = styles();

    return (
        <SkeletonPlaceholder>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ marginLeft: SIZES.marginHorizontal }}>
                    <View  style={ style.bar} />
                    <View  style={ style.bar } />
                    <View  style={ style.bar } />
                    <View  style={ style.bar } />
                </View>
            </View>
        </SkeletonPlaceholder>
    )
}

const styles = () => {
    return StyleSheet.create({
        bar: {
            height: 40, 
            borderRadius: SIZES.skeletonBorderRadius,
            marginBottom: 5,
            width: (SIZES.screenWidth - SIZES.marginHorizontal) / 1.1,
        }
    });
}

