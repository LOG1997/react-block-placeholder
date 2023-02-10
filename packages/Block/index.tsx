import React, { useCallback, useRef } from 'react'
import type { TPlaceHolder, TBlockStyle } from './type'
import { debounce } from 'lodash-es';
import { getRandomHex } from '../utils'
import './index.scss'
export default function PlaceholderBlock(props: TPlaceHolder) {
    let rounded_value = 0;
    const [isShowLine, setIsShowLine] = React.useState(false);
    const [offsetTop, setOffsetTop] = React.useState(0);
    const [offsetLeft, setOffsetLeft] = React.useState(0);
    const [offsetWidth, setOffsetWidth] = React.useState(0);
    const [offsetHeight, setOffsetHeight] = React.useState(0);
    const [offsetTopParent, setOffsetTopParent] = React.useState(0);
    const [offsetLeftParent, setOffsetLeftParent] = React.useState(0);

    const refDom = useRef(null);
    let linear_gradient = `linear-gradient(120deg, ${getRandomHex()} 0%,  ${getRandomHex()} 100%)`;
    const { w = 200, h = 70, bgColor = linear_gradient, color = "#fff", isGuideLines = false, isCSSStyles = true, text = "placeholder", round = true } = props;
    let style: TBlockStyle = {
        width: w,
        height: h,
        backgroundColor: bgColor,
        color: color,
        borderRadius: rounded_value,
        lineHeight: h + 'px',
    }
    if (round) {
        style.borderRadius = w > h ? parseInt(h as string) / 9 : parseInt(w as string) / 9;
    }
    if (bgColor.substring(0, 6) === 'linear') {
        style.backgroundImage = bgColor;
        delete style['backgroundColor'];
    }
    const handleHover = debounce((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isGuideLines) {
            getOffset(e);
            setIsShowLine(true);
        }
    }, 300);
    const handleMouseLeave = debounce((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsShowLine(false);
    })
    const getOffset = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target instanceof HTMLDivElement) {
            const { offsetWidth, offsetHeight, parentNode } = e.target as HTMLDivElement;
            const { offsetTop, offsetLeft } = parentNode as HTMLDivElement;
            const nodeParent = parentNode?.parentNode as HTMLDivElement;
            const offsetTopParent = offsetTop - nodeParent?.offsetTop;
            setOffsetTopParent(offsetTopParent);
            const offsetLeftParent = offsetLeft - nodeParent?.offsetLeft;
            setOffsetLeftParent(offsetLeftParent);
            setOffsetTop(offsetTop);
            setOffsetLeft(offsetLeft);
            setOffsetWidth(offsetWidth);
            setOffsetHeight(offsetHeight);
        }
    };


    return (
        <div style={{ position: "relative" }}>
            <div ref={refDom} className='placeholder-block' onMouseOver={handleHover} onMouseLeave={handleMouseLeave} style={style}>{text}</div>
            {(isGuideLines && isShowLine) ? <>
                <div className='line topLine' style={{ width: 1, height: offsetTop, backgroundImage: `linear-gradient(to top,${getRandomHex()} 0%, ${getRandomHex()} 100%)`, top: -offsetTop, left: offsetWidth / 2 }}>
                    <span className='showText' style={{ backgroundImage: `linear-gradient(120deg,${getRandomHex()} 0%, ${getRandomHex()} 100%)` }}>
                        offsetTop to root：{offsetTop}
                    </span>
                </div>
                <div className='line rightLine' style={{ width: offsetLeft, height: 1, backgroundImage: `linear-gradient(to right,${getRandomHex()} 0%, ${getRandomHex()} 100%)`, top: offsetHeight / 2, left: -offsetLeft }}>
                    <span className='showText' style={{ backgroundImage: `linear-gradient(120deg,${getRandomHex()} 0%, ${getRandomHex()} 100%)` }}>
                        offsetTop to root：{offsetTop}
                    </span>
                </div>
                <div className='line parentTopLine' style={{ width: 1, height: offsetTopParent, backgroundImage: `linear-gradient(to top,${getRandomHex()} 0%, ${getRandomHex()} 100%)`, top: -offsetTopParent, left: offsetWidth / 3 }}>
                    <span className='showText' style={{ backgroundImage: `linear-gradient(120deg,${getRandomHex()} 0%, ${getRandomHex()} 100%)` }}>
                        offsetTop to parent:{offsetTopParent}
                    </span>
                </div>
                <div className='line parentLeftLine' style={{ width: 1, height: offsetTopParent, backgroundImage: `linear-gradient(to right,${getRandomHex()} 0%, ${getRandomHex()} 100%)`, top: offsetWidth / 3, left: -offsetLeft }}>
                    <span className='showText' style={{ backgroundImage: `linear-gradient(120deg,${getRandomHex()} 0%, ${getRandomHex()} 100%)` }}>
                        offsetLeft to parent:{offsetLeftParent}
                    </span>
                </div>
            </> : null}
        </div >
    )
}   
