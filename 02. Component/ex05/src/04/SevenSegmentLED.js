import React, {Fragment} from "react";
import * as PropTypes from "prop-types";
import styles from './assets/scss/SevenSegmentLED.scss';

export default function SevenSegmentLED({number, colon}) {
    // colon : 중간에 생기는 점 두개요.
    return (
        <Fragment>
            <div className={styles.SevenSegmentLED}>
                <p>{number}</p>
                <p className="placeholder"/>
            </div>
            {colon ? <div><p>:</p></div> : null}
        </Fragment>
    );
}

SevenSegmentLED.propTypes = {
    colon: PropTypes.bool
};