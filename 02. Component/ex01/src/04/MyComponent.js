import React, { Fragment } from "react";
import { PropTypes } from 'prop-types';

export default function MyComponent({props01, props02, props03, props04, props05, props06, props07, props08, props09}){
    return (
        <Fragment>
            <h2>Property Validation</h2>

            <span>props01 문자: { props01 ? props01 : '--- Not Set ---'}</span>
            <br/>

            <span>props02 숫자: { props02 ? props02 : '--- Not Set ---'}</span>
            <br/>

            <span>props03 불린: { props03 ? `${props03}` : '--- Not Set ---'}</span>
            <br/>

            <span>props04 옵젝: { props04 ? props04.no : '--- Not Set ---'}</span>
            <br/>

            <span>props05 배열: { props05 ? props05.map((e, i) => <b key={i}>{e}</b> ): '--- Not Set ---'}</span>
            <br/>
            
            <span>props06 함수: { props06 ? props06() : '--- Not Set ---'}</span>
            <br/>

            <span>props07 숫자: { props07 ? props07 : '--- Not Set ---'}</span>
            <br/>

            <span>props08 배열: { props08 ? props08.map((e, i) => e ? <b key={i}>{'true'}</b> : <b key={i}>{'false'}</b> ) : '--- Not Set ---'}</span>
            <br/>

            <span>
                props09 배열: { 
                    props09 ?
                        <div>
                            <h3>{props09.no}</h3>
                            <h4>{props09.name}</h4>
                            <h5>{props09.email}</h5>
                        </div> : 
                        '--- Not Set ---'
                }
            </span>
            <br/>

            <p> b태그 : 볼딩 처리 태그 </p>

        </Fragment>
    )
}

MyComponent.propTypes = {
    // Built-In PropTypes Validator(primitive)
    // 왜 string은 isRequired를 안 쓰는가?
    props01: PropTypes.string,
    props02: PropTypes.number.isRequired,
    props03: PropTypes.bool.isRequired,
    props04: PropTypes.object.isRequired,
    props05: PropTypes.array.isRequired,
    props06: PropTypes.func.isRequired,

    // Built-In PropTypes Validator(Combined primitive)
    props07: PropTypes.oneOfType(PropTypes.string, PropTypes.number).isRequired,
    props08: PropTypes.arrayOf(PropTypes.bool).isRequired,
    props09: PropTypes.shape({
        no: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired
}

// default value
// 값을 주지 않고 MyComponent 컴포넌트만 쓸 경우, 디폴트값을 출력시키기 위해서
MyComponent.defaultProps = {
    props01: '기본값',
    props02: 10,
    props03: false, // 디폴트 false
    props04: {},
    props05: [],    // 깡통배열(빈 배열 ㅋㅋㅋ, dummy array)
    props06: () => {}, // 깡통함수(빈 함수 ㅋㅋㅋ, dummy function)
}