import React from 'react';
import _ from 'lodash';
import { CollectionPreviewContainer, CollectionPreviewTitle, PreviewContainer } from './collection-preview.styles';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items, previewItemsNumber }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitle to={`/shop/${_.toLower(title)}`}>{_.toUpper(title)}</CollectionPreviewTitle>
    <PreviewContainer>
      {
        _.take(items, previewItemsNumber).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
