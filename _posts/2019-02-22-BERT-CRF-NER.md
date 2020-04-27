---
layout:post
title:Bert-crf-biLSTM-ner
date:2019-03-051
background:'/img/note/H(D).png'
categories:neural_network
---
####command
+
pythonrun.py-data_dir=data-vocab_file=pretrain/chinese/vocab.txt-bert_config_file=pretrain/chinese/bert_config.json-init_checkpoint=pretrain/chinese/bert_model.ckpt-max_seq_length=128-learning_rate=2e-5-num_train_epochs=3.0-output_dir=output/

bert-base-ner-train\
-data_dir=/media/filesNew/szq/BERT-BiLSTM-CRF-NER-master/data\
-output_dir=/media/filesNew/szq/BERT-BiLSTM-CRF-NER-master/output/\
-init_checkpoint=/media/filesNew/szq/BERT-BiLSTM-CRF-NER-master/pretrain/chinese/bert_model.ckpt\
-bert_config_file=/media/filesNew/szq/BERT-BiLSTM-CRF-NER-master/pretrain/chinese/bert_config.json\
-vocab_file=/media/filesNew/szq/BERT-BiLSTM-CRF-NER-master/pretrain/chinese/vocab.txt
-device_map=[2,3]

bert-base-ner-train[-h][-data_dirDATA_DIR]
[-bert_config_fileBERT_CONFIG_FILE]
[-output_dirOUTPUT_DIR]
[-init_checkpointINIT_CHECKPOINT]
[-vocab_fileVOCAB_FILE]
[-max_seq_lengthMAX_SEQ_LENGTH]
[-do_trainDO_TRAIN][-do_evalDO_EVAL]
[-do_predictDO_PREDICT][-batch_sizeBATCH_SIZE]
[-learning_rateLEARNING_RATE]
[-num_train_epochsNUM_TRAIN_EPOCHS]
[-dropout_rateDROPOUT_RATE][-clipCLIP]
[-warmup_proportionWARMUP_PROPORTION]
[-lstm_sizeLSTM_SIZE][-num_layersNUM_LAYERS]
[-cellCELL]
[-save_checkpoints_stepsSAVE_CHECKPOINTS_STEPS]
[-save_summary_stepsSAVE_SUMMARY_STEPS]
[-filter_adam_varFILTER_ADAM_VAR]
[-do_lower_caseDO_LOWER_CASE][-cleanCLEAN]
[-device_mapDEVICE_MAP][-label_listLABEL_LIST]
[-verbose][-nerNER][-version]




