import { computed } from 'vue'
import { pick } from "lodash-es";
import { TextComponentProps } from '@/defaultProps';

// 画布区域
const isCanvasInner = (clickDom: HTMLElement) => {
    const canvasArea = document.getElementById('canvas-area')
    if (canvasArea && canvasArea.contains(clickDom)) {
        return true
    }
    return false
}

const useComponentCommon = (props: Readonly<Partial<TextComponentProps>>, picks: string[]) => {
    const styleProps = computed(() => pick(props, picks));
    const handleClick = (e: any) => {
        const element = e.target as HTMLElement
        if (props.actionType === 'url' && props.url && !isCanvasInner(element)) {
            window.location.href = props.url
        }
    }
    return {
        styleProps, handleClick
    }
}

export default useComponentCommon

