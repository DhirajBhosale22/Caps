import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';


import next from '../assets/img/next.png'

interface FileType {
  title: string;
  subtitle: string;
  icon: string;
  image: typeof import('../assets/img/next.png');
}

const FilesPage: React.FC = ({ navigation, route }) => {
    const pages: FileType[] = [
        { title: 'Images', subtitle: 'View The Images in This Case', icon: 'image', image: require('../assets/img/next.png') },
        { title: 'Audio', subtitle: 'View The Audio in This Case', icon: 'volume-up', image: require('../assets/img/next.png') },
        { title: 'Video', subtitle: 'View The Video in This Case', icon: 'videocam', image: require('../assets/img/next.png') },
        { title: 'Documents', subtitle: 'View The Documents in This Case', icon: 'document', image: require('../assets/img/next.png') },
      ];
  const [caseId, setCaseId] = useState<string | null>(null);
  const [agressionFiles, setAgressionFiles] = useState<null | { caseAttachmentDetails: string }>(null);
  const [showFiles, setShowFiles] = useState<boolean>(false);
  const [fromUpload, setFromUpload] = useState<null | unknown>(null);

  useEffect(() => {
    const { case_id, agression_files, from_upload, show_files } = route.params || {};
    setCaseId(case_id);
    setAgressionFiles(agression_files);
    setFromUpload(from_upload);
    setShowFiles(show_files);
  }, [route.params]);

  const handleGetImage = (page: FileType) => {
    if (agressionFiles?.caseAttachmentDetails === 'No attachments found') {
      navigation.push('AddfilePage', {
        page,
        caseId,
        agressionFiles: '',
        showFiles,
      });
    } else {
      navigation.push('AddfilePage', {
        page,
        caseId,
        agressionFiles: agressionFiles?.caseAttachmentDetails,
        showFiles,
      });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#f5f5f5', padding: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Files</Text>
      </View>
      <ScrollView>
        {pages.map((item) => (
         <TouchableOpacity key={item.title} onPress={() => handleGetImage(item)}>
         <View style={{ flexDirection: 'row', padding: 10, backgroundColor: '#fff', marginVertical: 5 }}>
           <Image source={item.image} style={{ width: 40, height: 40, marginRight: 10 }} />
           <View style={{ flex: 1 }}>
             <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
             <Text>{item.subtitle}</Text>
           </View>
           <Image   source={next} style={{ width: 20, height: 20, marginRight: 10 }} />
         </View>
       </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default FilesPage;