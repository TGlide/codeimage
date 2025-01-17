import clsx from 'clsx';
import {
  DynamicProps,
  ValidConstructor,
  WithRef,
} from 'solid-headless/dist/types/utils/dynamic-prop';
import {JSXElement, ParentProps} from 'solid-js';
import {Dynamic} from 'solid-js/web';
import {omitProps} from 'solid-use';
import {useText, UseTextProps} from './useText';

export type TextComponentProps = {
  size?: UseTextProps['size'];
  weight?: UseTextProps['weight'];
};

export type TextProps<T extends ValidConstructor = 'span'> = {
  as?: T | ValidConstructor;
  innerHTML?: JSXElement | string;
} & WithRef<T> &
  Omit<DynamicProps<T>, 'ref' | 'as'> &
  TextComponentProps;

export function Text<T extends ValidConstructor = 'span'>(
  props: ParentProps<TextProps<T>>,
): JSXElement {
  const textClasses = useText(props);

  return (
    <Dynamic
      component={props.as ?? 'span'}
      {...omitProps(props, ['as', 'children', 'size', 'weight'])}
      class={clsx(textClasses(), props.class)}
    >
      {props.children}
    </Dynamic>
  );
}
