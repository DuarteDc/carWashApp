import { FC, RefObject } from 'react';
import { Modalize } from 'react-native-modalize';
import { IHandles } from 'react-native-modalize/lib/options';

interface IModalize {
  children      ?: JSX.Element;
  modalizeRef   ?: RefObject<IHandles>
}

const ModalizeUI: FC<IModalize> = ({ children, modalizeRef }): JSX.Element => {

  return (
    <Modalize
      ref={modalizeRef}
      adjustToContentHeight
      scrollViewProps={{ showsVerticalScrollIndicator: true }}
      snapPoint={300}
    >
      {children}
    </Modalize>
  );

}

export default ModalizeUI;